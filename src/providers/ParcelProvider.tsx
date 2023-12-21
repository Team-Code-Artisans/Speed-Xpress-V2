"use client";

import { ChildrenProps } from "@/types/ChildrenProps";
import { ParcelContextType } from "@/types/ParcelType";
import { getAllParcel } from "@/utils/api/parcel";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const ParcelContext = createContext<ParcelContextType>(
  {} as ParcelContextType
);

const ParcelProvider = ({ children }: ChildrenProps) => {
  const {
    data: allParcel = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allParcel"],
    queryFn: async () => {
      const parcelResponse = await getAllParcel();
      return parcelResponse?.code === "success" && parcelResponse?.data;
    },
  });

  const value: any = {
    allParcel: allParcel,
  };

  return (
    <ParcelContext.Provider value={value}>{children}</ParcelContext.Provider>
  );
};

export default ParcelProvider;
