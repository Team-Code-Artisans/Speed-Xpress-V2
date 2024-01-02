import { getAllShop, getShopsByEmail } from "@/utils/api/shop";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useShop = () => {
  const { user, role } = useAuth();

  // Get shops by email
  const {
    data: shops = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["shops"],
    queryFn: async () => {
      if (user?.email && role) {
        if (role === "merchant") {
          const shopResponse = await getShopsByEmail(user.email);
          if (shopResponse.code === "success") {
            return shopResponse.data;
          } else {
            console.error(shopResponse.error);
          }
        }
        if (role === "admin") {
          const shopResponse = await getAllShop();
          if (shopResponse.code === "success") {
            return shopResponse.data;
          } else {
            console.error(shopResponse.error);
          }
        }
      }
    },
  });

  return { shops, isLoading, refetch };
};
