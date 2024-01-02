"use client";

import { useShop } from "@/hooks/useShop";
import CreateShop from "../CreateShop/CreateShopModal";

const Shops = () => {
  const { shops, isLoading, refetch } = useShop();

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      <div className="flex justify-between gap-4">
        <div className="pb-10 space-y-2">
          <h1 className="text-2xl font-semibold text-gray-600 capitalize lg:text-3xl">
            All <span className="text-primary">SHOPS</span>
          </h1>

          <>
            <span className="inline-block w-20 h-1 bg-primary rounded-full"></span>
            <span className="inline-block w-4 h-1 ml-1 bg-primary rounded-full"></span>
            <span className="inline-block w-2 h-1 ml-1 bg-primary rounded-full"></span>
          </>
        </div>
        <CreateShop />
      </div>
    </div>
  );
};

export default Shops;
