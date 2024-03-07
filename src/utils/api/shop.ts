import {
  ShopResponseType,
  ShopType,
  UpdateShopRequestType,
} from "@/types/ShopType";
import api from "../axios";
import { requestHandler } from "../requestHandler";

// Create shop
export const createShop = requestHandler<ShopType, ShopResponseType>((data) =>
  api.post(`/shops/create-shop`, data)
);

// Get all shop
export const getAllShop = requestHandler<void, ShopResponseType[]>(() =>
  api.get("/shops/all-shop")
);

// Get shop by id
export const getSingleShop = requestHandler<string, ShopResponseType>((id) =>
  api.get(`/shops/${id}`)
);

// Get shops by email
export const getShopsByEmail = requestHandler<string, ShopResponseType[]>(
  (email) => api.get(`/shops?email=${email}`)
);

// Update shop by id
export const updateShop = requestHandler<
  UpdateShopRequestType,
  ShopResponseType
>((params) => {
  const { id, data } = params || {};
  return api.put(`/shops/update-shop/${id}`, data);
});

// Delete shop by id
export const deleteShop = requestHandler<string, ShopResponseType>((id) =>
  api.delete(`/shops/${id}`)
);
