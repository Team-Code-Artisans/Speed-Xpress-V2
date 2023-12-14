"use client";

import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import { PrivateRouteType } from "@/types/PrivateRouteType";
import { useLayoutEffect, useState } from "react";

const PrivateRoute = ({ children, allowedRole }: PrivateRouteType) => {
  const { user, role, loading } = useAuth();
  const [isInitialized, setIsInitialized] = useState(false);

  useLayoutEffect(() => {
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
    return <Loading size="lg" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
