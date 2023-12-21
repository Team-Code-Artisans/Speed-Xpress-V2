import { ParcelResponseType, ParcelType } from "@/types/ParcelType";
import api from "../axios";
import { requestHandler } from "../requestHandler";

// get all the parcels
export const getAllParcel = requestHandler<void, ParcelResponseType>(() =>
  api.get("/parcels/all-parcel")
);

// get single parcel
export const getSingleParcel = requestHandler<string, ParcelResponseType>(
  (id) => api.get(`/parcels/:${id}`)
);

// get parcel by email
export const getParcelByEmail = requestHandler<string, ParcelResponseType>(
  (email) => api.get(`/parcels?email=${email}`)
);

// create parcel post method
export const createParcel = requestHandler<ParcelType, ParcelResponseType>(
  (data) => api.post("/parcels/create-parcel", data)
);

// update parcel data
export const updateParcel = requestHandler<ParcelType, ParcelResponseType>(
  (data) => api.put(`/parcels/:id`, data)
);

// delete parcel
export const deleteParcel = requestHandler<string, ParcelType>((id) =>
  api.delete(`/parcels/:${id}`)
);
