"use client";

import { useAuth } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import AdminDashboardLayout from "./admin/layout";
import UserDashboardLayout from "./user/layout";
import MerchantDashboardLayout from "./merchant/layout";
import RiderDashboardLayout from "./rider/layout";
import { ChildrenProps } from "@/types/ChildrenProps";

const DashboardLayout = ({ children }: ChildrenProps) => {
  const { user, role } = useAuth();

  if (!user) {
    return <Loading size="lg" />;
  }

  if (!user.email) {
    // Handle the case where user email is not available.
    return null;
  }

  if (!role) {
    // You might want to add a loading state here while fetching the role.
    return <Loading size="lg" />;
  }

  switch (role) {
    case "admin":
      return <AdminDashboardLayout>{children}</AdminDashboardLayout>;
    case "user":
      return <UserDashboardLayout>{children}</UserDashboardLayout>;
    case "merchant":
      return <MerchantDashboardLayout>{children}</MerchantDashboardLayout>;
    case "rider":
      return <RiderDashboardLayout>{children}</RiderDashboardLayout>;
    default:
      return <div>Error: Unknown role</div>;
  }
};

export default DashboardLayout;
