import { InvoiceType } from "@/types/invoiceType";
import api from "../axios";
import { requestHandler } from "../requestHandler";

// get all the payment
export const getAllInvoice = requestHandler<void, InvoiceType[]>(() =>
  api.get("/payment/all-invoices")
);

// get single invoice by invoiceId
export const getSingleInvoice = requestHandler<string, InvoiceType>((id) =>
  api.get(`/payment/invoice/${id}`)
);

// get invoice by email
export const getInvoiceByEmail = requestHandler<string, InvoiceType[]>(
  (email) => api.get(`/payment/invoice/?email=${email}`)
);

// update invoice status
export const updateInvoiceStatus = requestHandler<
  { id: string; data: { parcelId: string; status: string } },
  InvoiceType
>((params) => {
  const { id, data } = params || {};
  return api.put(`/payment/update-status/${id}`, data);
});

// create invoice
export const createInvoice = requestHandler<InvoiceType, InvoiceType>((data) =>
  api.post("/payment/create-invoice", data)
);

// delete parcel
export const deleteInvoice = requestHandler<string, InvoiceType>((id) =>
  api.delete(`/payment/${id}`)
);
