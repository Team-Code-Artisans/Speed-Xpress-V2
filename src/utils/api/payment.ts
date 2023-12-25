import { PaymentType, PaymentResponseType } from "@/types/PaymentType";
import api from "../axios";
import { requestHandler } from "../requestHandler";

export const createPayment = requestHandler<PaymentType, PaymentResponseType>(
  (data) => api.post("/payment", data)
);
