"use client";

import InvoiceStats from "@/components/Dashboard/Home/InvoiceStats";
import ParcelStats from "@/components/Dashboard/Home/ParcelStats";
import { useParcel } from "@/hooks/useParcel";
import Loading from "@/ui/Loading";

const MerchantDashboardPage = () => {
  const { parcels, isLoading } = useParcel();

  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:py-20 py-10 space-y-10">
      {isLoading ? (
        <div className="grid place-items-center h-40">
          <Loading size="lg" />
        </div>
      ) : (
        <>
          <ParcelStats parcels={parcels} />
          <InvoiceStats />
        </>
      )}
    </div>
  );
};

export default MerchantDashboardPage;
