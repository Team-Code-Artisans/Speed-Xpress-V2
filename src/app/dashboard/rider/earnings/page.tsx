"use client";

import ParcelTable from "@/components/Dashboard/Parcels/ParcelTable";
import { useState } from "react";

const EarningsPage = () => {
  const [earnings, setEarnings] = useState<number>(0);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      <div className="flex justify-between gap-2 pb-10">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-600 capitalize lg:text-3xl">
            ALL <span className="text-primary">EARNING</span>
          </h1>

          <>
            <span className="inline-block w-20 h-1 bg-primary rounded-full"></span>
            <span className="inline-block w-4 h-1 ml-1 bg-primary rounded-full"></span>
            <span className="inline-block w-2 h-1 ml-1 bg-primary rounded-full"></span>
          </>
        </div>
        <h1 className="text-2xl font-semibold text-gray-600 capitalize lg:text-3xl">
          TOTAL: <span className="text-primary">{earnings}</span>
        </h1>
      </div>
      <ParcelTable setEarnings={setEarnings} />
    </div>
  );
};

export default EarningsPage;
