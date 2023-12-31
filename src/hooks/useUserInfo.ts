"use client";

import { UserType } from "@/types/UserType";
import { getSingleUser } from "@/utils/api/user";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useUserInfo = () => {
  const { user } = useAuth();

  // Get user info by email
  const {
    data: userInfo = {} as UserType,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (user?.email) {
        const userResponse = await getSingleUser(user.email);
        if (userResponse.code === "success") {
          return userResponse.data || {};
        }
      }
      return {};
    },
  });

  return { userInfo, isLoading, refetch };
};
