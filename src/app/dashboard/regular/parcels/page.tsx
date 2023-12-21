"use client";

import { useParcel } from "@/hooks/useParcel";

const ParcelsPage = () => {
  const { allParcel } = useParcel();

  console.log("allParcel:", allParcel);

  return <div>ParcelsPage</div>;
};

export default ParcelsPage;
