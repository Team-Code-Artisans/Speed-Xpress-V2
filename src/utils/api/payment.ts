import api from "../axios";
import { requestHandler } from "../requestHandler";

export const createPayment = requestHandler<any, any>((data) =>
  api.post("/payment", data)
);
