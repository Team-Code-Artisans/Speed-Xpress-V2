"use client";

import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

type RoleProps = (role: string | null) => boolean;

const usePrivateRoute = (roleCheck: RoleProps) => {
  const { user, role, loading } = useAuth();

  useLayoutEffect(() => {
    if (loading) {
      return;
    }

    if (!user || !roleCheck(role)) {
      redirect("/login");
    }
  }, [user, role, loading, roleCheck]);

  if (!user || !roleCheck(role)) {
    return null;
  }

  return true;
};

export default usePrivateRoute;
