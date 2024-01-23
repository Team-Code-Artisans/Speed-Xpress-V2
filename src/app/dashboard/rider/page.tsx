"use client";

import InvoiceStats from "@/components/Dashboard/Home/InvoiceStats";
import LineChart from "@/components/Dashboard/Home/LineChart";
import ParcelStats from "@/components/Dashboard/Home/ParcelStats";
import PieChart from "@/components/Dashboard/Home/PieChart";
import { useParcel } from "@/hooks/useParcel";
import Loading from "@/ui/Loading";

const RiderDashboardPage = () => {
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
          <div className="space-y-10">
            <h1 className="text-2xl font-semibold lg:text-3xl">
              PARCEL <span className="text-primary">CHART</span>
            </h1>
            <div className="flex gap-4 items-center justify-between">
              <LineChart parcels={parcels} />
              <PieChart parcels={parcels} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RiderDashboardPage;
