export type PaymentType = {
  userId: string;
  parcelId: string;
  amount: number;
  status: string;
  paymentDateTime: string;
};

export type PaymentResponseType = {
  clientSecret: any;
};
