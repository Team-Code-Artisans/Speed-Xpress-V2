import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { ParcelType } from "./ParcelType";

export type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  number: string;
  address: string;
  shopName?: string;
};

type UserDataType = {
  photoURL: string;
  role: string;
  division: string;
  district: string;
  vehicle?: string;
};

type RegisterFormWithoutPassword = Omit<RegisterFormType, "password">;

export type RegisterUserDataType = RegisterFormWithoutPassword & UserDataType;

export type DivisionPropsType = {
  variant?: "flat" | "faded" | "bordered";
  division: string;
  setDivision: React.Dispatch<React.SetStateAction<string>>;
  setDistrict: React.Dispatch<React.SetStateAction<string>>;
};

export type DistrictPropsType = {
  variant?: "flat" | "faded" | "bordered";
  district: string;
  division: string;
  setDistrict: React.Dispatch<React.SetStateAction<string>>;
};

export type VehiclePropsType = {
  variant?: "flat" | "faded" | "bordered";
  vehicle: string;
  setVehicle: React.Dispatch<React.SetStateAction<string>>;
};

export type ProfileFormType = {
  name: string;
  number: string;
  address: string;
  division?: string;
  district?: string;
};

export type ProfileFormProps = {
  onClose: () => void;
};

export type ParcelFormType = {
  name: string;
  email: string;
  number: string;
  address: string;
  description: string;
};

export type ParcelFormProps = {
  onClose: () => void;
  id: string | null;
  refetchAll: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<ParcelType[], Error>>;
};
