import { ShopResponseType, ShopType } from "@/types/ShopType";
import api from "../axios";
import { requestHandler } from "../requestHandler";

// Create shop
export const createShop = requestHandler<ShopType, ShopResponseType>(() =>
  api.get(`/shops/create-shop`)
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
  (email) => api.get(`/shops?${email}`)
);

// Update shop by id
export const updateShop = requestHandler<ShopType, ShopResponseType>((id) =>
  api.get(`/shops/update-shop/${id}`)
);
