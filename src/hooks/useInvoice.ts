import { getAllInvoice, getInvoiceByEmail } from "@/utils/api/invoice";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useInvoice = () => {
  const { user, role } = useAuth();

  // Get invoices by email
  const {
    data: invoices = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["invoices"],
    queryFn: async () => {
      if (user?.email && role) {
        if (role !== "admin") {
          const invoiceResponse = await getInvoiceByEmail(user.email);
          if (invoiceResponse.code === "success") {
            return invoiceResponse.data || [];
          } else {
            console.error(invoiceResponse.error);
          }
        } else {
          const invoiceResponse = await getAllInvoice();
          if (invoiceResponse.code === "success") {
            return invoiceResponse.data || [];
          } else {
            console.error(invoiceResponse.error);
          }
        }
      }
      return [];
    },
  });

  return { invoices, isLoading, refetch };
};
