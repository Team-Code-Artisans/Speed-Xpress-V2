import { UserType } from "@/types/UserType";
import { getAllUsers, getSingleUser } from "@/utils/api/user";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useUserInfo = () => {
  const { user, role } = useAuth();

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
          return userResponse.data;
        } else {
          console.error(userResponse.error);
        }
      }
    },
  });

  // Get all users
  const {
    data: allUser = [] as UserType[],
    isLoading: allIsLoading,
    refetch: refetchAll,
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      if (user?.email && role) {
        if (role === "admin") {
          const userResponse = await getAllUsers();
          if (userResponse.code === "success") {
            return userResponse.data;
          } else {
            console.error(userResponse.error);
            return [];
          }
        } else {
          return [];
        }
      }
    },
  });

  return { userInfo, isLoading, refetch, allUser, allIsLoading, refetchAll };
};
