"use client";

import { useShop } from "@/hooks/useShop";

const Shops = () => {
  const { shops, isLoading, refetch } = useShop();

  return <div>Shops</div>;
};

export default Shops;
