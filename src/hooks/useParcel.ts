import { getAllParcel, getParcelByEmail } from "@/utils/api/parcel";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useParcel = () => {
  const { user, role } = useAuth();

  // Get parcels by email
  const {
    data: parcels = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      if (user?.email && role) {
        if (role !== "admin") {
          const parcelResponse = await getParcelByEmail(user.email);
          if (parcelResponse.code === "success") {
            return parcelResponse.data || [];
          } else {
            console.error(parcelResponse.error);
          }
        } else {
          const parcelResponse = await getAllParcel();
          if (parcelResponse.code === "success") {
            return parcelResponse.data || [];
          } else {
            console.error(parcelResponse.error);
          }
        }
      }
      return [];
    },
  });

  return { parcels, isLoading, refetch };
};
