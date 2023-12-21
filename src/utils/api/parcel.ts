import { ParcelType } from "@/types/ParcelType";
import api from "../axios";
import { requestHandler } from "../requestHandler";

// get all the parcels
export const getAllParcel = requestHandler<void, ParcelType[]>(() =>
  api.get("/parcels/all-parcel")
);

// get single parcel by parcelId
export const getSingleParcel = requestHandler<string, ParcelType>((id) =>
  api.get(`/parcels/:${id}`)
);

// get parcel by email
export const getParcelByEmail = requestHandler<string, ParcelType[]>((email) =>
  api.get(`/parcels?email=${email}`)
);

// create parcel post method
export const createParcel = requestHandler<ParcelType, ParcelType>((data) =>
  api.post("/parcels/create-parcel", data)
);

// delete parcel
export const deleteParcel = requestHandler<string, ParcelType>((id) =>
  api.delete(`/parcels/:${id}`)
);
