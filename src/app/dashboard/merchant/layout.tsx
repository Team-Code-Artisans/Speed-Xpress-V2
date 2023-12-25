"use client";

import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { ChildrenProps } from "@/types/ChildrenProps";
import Loading from "@/ui/Loading";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

const MerchantDashboardLayout = ({ children }: ChildrenProps) => {
  const { user, role, loading } = useAuth();

  useLayoutEffect(() => {
    if (loading) {
      return;
    }

    if (!user || role !== "regular") {
      redirect("/login");
    }
  }, [user, role, loading]);

  if (loading) {
    return (
      <div className="grid place-items-center h-screen">
        <Loading size="lg" />
      </div>
    );
  }

  if (!user || role !== "regular") {
    return null;
  }

  return (
    <div>
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default MerchantDashboardLayout;
