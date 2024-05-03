import { getSingleParcel } from "@/utils/api/parcel";
import { useQuery } from "@tanstack/react-query";

const useSingleParcel = (id: string) => {
  return useQuery({
    queryKey: ["Parcel", id],
    queryFn: async () => {
      const response = await getSingleParcel(id);
      return response.code === "success" ? response.data : null;
    },
  });
};

export default useSingleParcel;
