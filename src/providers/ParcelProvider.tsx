"use client";

import { ChildrenProps } from "@/types/ChildrenProps";
import { ParcelContextType } from "@/types/ParcelType";
import { getAllParcel } from "@/utils/api/parcel";
import { createContext } from "react";
import { useQuery } from "react-query";

export const parcelContext = createContext<ParcelContextType>(
  {} as ParcelContextType
);

const ParcelProvider = ({ children }: ChildrenProps) => {
  const { data: allParcel = [] } = useQuery({
    queryKey: ["allParcel"],
    queryFn: () => getAllParcel(),
  });

  console.log("allParcel:", allParcel);

  const value: ParcelContextType = {
    allParcel,
  };

  return (
    <parcelContext.Provider value={value}>{children}</parcelContext.Provider>
  );
};

export default ParcelProvider;
