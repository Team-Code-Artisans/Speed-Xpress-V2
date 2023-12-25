"use client";

import { createPayment } from "@/utils/api/payment";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements?.getElement("card");

    try {
      if (!stripe || !cardElement) return;

      const paymentData = {
        user: "any",
        parcel: "any",
        amount: "any",
        currency: "any",
        paymentMethod: " string",
        paymentIntentId: "any",
        status: "string",
        clientSecret: "any",
      };

      await createPayment(paymentData);

      const { clientSecret } = paymentData;

      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: cardElement },
        }
      );

      if (error) {
        console.error("Payment failed:", error.message);
        // Handle payment failure
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        console.log("Payment succeeded!");
        // Handle payment success
      }
    } catch (error: any) {
      console.error("Error during payment:", error.message);
      // Handle general error
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <CardElement />
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Submit"}
      </button>
    </form>
  );
};

export default CheckoutForm;
