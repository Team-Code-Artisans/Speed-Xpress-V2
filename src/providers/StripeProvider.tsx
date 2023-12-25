"use client";

import { ChildrenProps } from "@/types/ChildrenProps";
import stripePromise from "@/utils/stripePromise";
import { Elements } from "@stripe/react-stripe-js";

const StripeProvider = ({ children }: ChildrenProps) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
