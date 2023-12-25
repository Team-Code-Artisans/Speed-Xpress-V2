"use client";

import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";
import { useAuth } from "@/hooks/useAuth";
import usePrivateRoute from "@/hooks/usePrivateRoute";
import { ChildrenProps } from "@/types/ChildrenProps";
import Loading from "@/ui/Loading";

const RiderDashboardLayout = ({ children }: ChildrenProps) => {
  const { loading } = useAuth();
  const isAuthorized = usePrivateRoute((role) => role === "rider");

  if (loading) {
    return (
      <div className="grid place-items-center h-screen">
        <Loading size="lg" />
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <div>
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default RiderDashboardLayout;
