import CreateShopModal from "@/components/Dashboard/CreateShop/CreateShopModal";
import ShopCard from "@/components/Dashboard/Shops/ShopCard";

const ShopsPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      <div className="pb-10 space-y-2">
        <div className="flex justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold uppercase lg:text-3xl">
              All <span className="text-primary">SHOPS</span>
            </h1>

            <>
              <span className="inline-block w-20 h-1 bg-primary rounded-full"></span>
              <span className="inline-block w-4 h-1 ml-1 bg-primary rounded-full"></span>
              <span className="inline-block w-2 h-1 ml-1 bg-primary rounded-full"></span>
            </>
          </div>
          <CreateShopModal />
        </div>
      </div>
      {/* Shop cards */}
      <ShopCard />
    </div>
  );
};

export default ShopsPage;
