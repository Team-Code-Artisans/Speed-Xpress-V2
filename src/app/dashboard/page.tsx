"use client";

import { useAuth } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const DashboardHomePage = () => {
  const { role, loading } = useAuth();

  if (loading) {
    return (
      <div className="grid place-items-center h-screen">
        <Loading size="lg" />
      </div>
    );
  }

  if (role) {
    redirect(`/dashboard/${role}`);
  } else {
    toast.error("Something went wrong!");
    redirect("/login");
  }
};

export default DashboardHomePage;
