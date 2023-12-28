export type PaymentType = {
  userEmail: string;
  userRole: string;
  parcelId: string;
  amount: number;
  status: string;
  paymentDateTime: string;
};

export type PaymentResponseType = {
  clientSecret: string;
};
