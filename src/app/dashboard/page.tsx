"use client";

import { useAuth } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const DashboardHomePage = () => {
  const { role, loading } = useAuth();

  if (loading) {
    return (
      <div className="grid place-items-center h-screen">
        <Loading size="lg" />
      </div>
    );
  }

  useEffect(() => {
    if (role) {
      redirect(`/dashboard/${role}`);
    }
  }, [role, loading]);
};

export default DashboardHomePage;
