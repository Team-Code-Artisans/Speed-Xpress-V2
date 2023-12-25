"use client";

import { useAuth } from "@/hooks/useAuth";
import { ChildrenProps } from "@/types/ChildrenProps";
import { ParcelContextType } from "@/types/ParcelType";
import { getParcelByEmail } from "@/utils/api/parcel";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const ParcelContext = createContext<ParcelContextType>(
  {} as ParcelContextType
);

const ParcelProvider = ({ children }: ChildrenProps) => {
  const { user } = useAuth();

  // get parcels by email
  const { data: parcels = [], isLoading: parcelsLoading } = useQuery({
    queryKey: ["ParcelsByEmail", user],
    queryFn: async () => {
      if (user?.email) {
        const parcelResponse = await getParcelByEmail(user.email);
        if (parcelResponse.code === "success") {
          return parcelResponse.data || [];
        }
      }
      return [];
    },
  });

  const value: ParcelContextType = {
    parcels,
    parcelsLoading,
  };

  return (
    <ParcelContext.Provider value={value}>{children}</ParcelContext.Provider>
  );
};

export default ParcelProvider;
