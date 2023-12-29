"use client";

import { getParcelByEmail } from "@/utils/api/parcel";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useParcel = () => {
  const { user } = useAuth();

  // get parcels by email
  const { data: parcels = [], isLoading } = useQuery({
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

  return { parcels, isLoading };
};
