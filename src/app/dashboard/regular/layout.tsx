"use client";

import { useAuth } from "@/hooks/useAuth";
import usePrivateRoute from "@/hooks/usePrivateRoute";
import { ChildrenProps } from "@/types/ChildrenProps";
import Loading from "@/ui/Loading";

const RegularDashboardLayout = ({ children }: ChildrenProps) => {
  const { loading } = useAuth();
  const isAuthorized = usePrivateRoute((role) => role === "regular");

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

  return <>{children}</>;
};

export default RegularDashboardLayout;
