"use client";

import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import { PrivateRouteType } from "@/types/PrivateRouteType";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children, allowedRole }: PrivateRouteType) => {
  const { user, role, loading } = useAuth();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user) {
      redirect("/login");
    }

    if (allowedRole !== undefined && role !== allowedRole) {
      redirect("/login");
    }

    setIsInitialized(true);
  }, [user, role, allowedRole, loading]);

  if (loading || !isInitialized) {
    return (
      <div className="grid place-items-center h-screen">
        <Loading size="lg" />
      </div>
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
