"use client";

import { useShop } from "@/hooks/useShop";
import Loading from "@/ui/Loading";
import UpdateShopModal from "./UpdateShopModal";

const ShopCard = () => {
  const { shops, isLoading, refetch } = useShop();

  return (
    <>
      {isLoading ? (
        <div className="grid place-items-center h-[40rem]">
          <Loading size="lg" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
          {shops.map((shop) => (
            <div
              key={shop.shopId}
              className="flex flex-col gap-8 bg-gray-200 dark:bg-gray-900 p-8 rounded-lg max-w-[40rem] w-full h-full"
            >
              <div className="flex justify-between items-center gap-4">
                <h1 className="text-2xl font-semibold whitespace-nowrap">
                  {shop.name}
                </h1>

                {/* Update shop modal */}
                <UpdateShopModal
                  id={shop.shopId}
                  refetch={refetch}
                  shop={shop}
                />
              </div>
              {/* Shop info */}
              <div className="grid sm:grid-cols-2 sm:gap-8 gap-4">
                <div>
                  <label htmlFor="id" className="text-sm">
                    Shop ID
                  </label>
                  <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                    {shop.shopId}
                  </h1>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <h1 className="text-lg sm:text-xl">{shop.email}</h1>
                </div>
                <div>
                  <label htmlFor="number" className="text-sm">
                    Number
                  </label>
                  <h1 className="text-lg sm:text-xl whitespace-nowrap">
                    {shop.number}
                  </h1>
                </div>
                <div>
                  <label htmlFor="address" className="text-sm">
                    Address
                  </label>
                  <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                    {shop.address.address}
                  </h1>
                </div>
                <div>
                  <label htmlFor="division" className="text-sm">
                    Division
                  </label>
                  <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                    {shop.address.division}
                  </h1>
                </div>
                <div>
                  <label htmlFor="district" className="text-sm">
                    District
                  </label>
                  <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                    {shop.address.district}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ShopCard;
