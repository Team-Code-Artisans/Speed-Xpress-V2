"use client";

import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useAuth } from "@/hooks/useAuth";
import { ChildrenProps } from "@/types/ChildrenProps";
import Loading from "@/ui/Loading";

const DashboardLayout = ({ children }: ChildrenProps) => {
  const { loading } = useAuth();

  return (
    <>
      <DashboardNavbar />

      {loading ? (
        <div className="grid place-items-center h-screen">
          <Loading size="lg" />
        </div>
      ) : (
        <>{children}</>
      )}

      <Footer />
    </>
  );
};

export default DashboardLayout;
