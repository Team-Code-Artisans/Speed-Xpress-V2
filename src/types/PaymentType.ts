export type PaymentType = {
  userEmail: string;
  userName: string;
  userRole: string;
  parcelId: string;
  amount: number;
  status: string;
  paymentDateTime: string;
};

export type PaymentResponseType = {
  id: string;
  url: string;
};
