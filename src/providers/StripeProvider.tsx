"use client";

import { ChildrenProps } from "@/types/ChildrenProps";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

const StripeProvider = ({ children }: ChildrenProps) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
