export type InvoiceType = {
  _id?: string;
  invoiceId?: string;
  paymentId?: string;
  parcelId: string;
  userName: string;
  userEmail: string;
  amount: string;
  currency: string;
  paymentMethod: string;
  paymentDateTime: string;
  status: string;
};
