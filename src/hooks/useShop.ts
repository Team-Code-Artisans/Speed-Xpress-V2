"use client";

import { getAllShop, getShopsByEmail } from "@/utils/api/shop";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useShop = () => {
  const { user } = useAuth();

  // Get shops by email
  const {
    data: shops = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["shops"],
    queryFn: async () => {
      if (user?.displayName === "merchant") {
        const shopResponse = await getShopsByEmail("merchant5@gmail.com");
        if (shopResponse.code === "success") {
          console.log(shopResponse);
          return shopResponse.data;
        } else {
          console.error(shopResponse.error);
        }
      }
      if (user?.displayName === "admin") {
        const shopResponse = await getAllShop();
        if (shopResponse.code === "success") {
          return shopResponse.data;
        } else {
          console.error(shopResponse.error);
        }
      }
    },
  });

  return { shops, isLoading, refetch };
};
