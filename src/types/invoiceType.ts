export type InvoiceType = {
  _id?: string;
  invoiceId?: string;
  paymentId?: string;
  parcelId: string;
  userName: string;
  userRole: string;
  userEmail: string;
  amount: number;
  currency?: string;
  paymentMethod: string;
  paymentDateTime: string;
  status: string;
};
