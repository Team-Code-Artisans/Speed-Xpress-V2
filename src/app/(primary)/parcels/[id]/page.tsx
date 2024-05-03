"use client";

import ParcelDetails from "@/components/Dashboard/Parcels/ParcelDetails";
import useSingleParcel from "@/hooks/useSingleParcel";
import Loading from "@/ui/Loading";
import PrimaryButton from "@/ui/PrimaryButton";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ParcelDetailsPage = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useSingleParcel(params.id);

  const parcelRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => parcelRef.current,
  });

  return (
    <div className="lg:py-20 py-10 px-6 max-w-screen-xl mx-auto space-y-8">
      <div className="flex justify-between gap-2 items-center">
        <h1 className="font-bold text-4xl">
          <span className="text-primary">PARCEL</span> DETAILS
        </h1>
        <PrimaryButton onClick={handlePrint}>Download PDF</PrimaryButton>
      </div>
      <Divider />
      {isLoading ? (
        <div className="flex justify-center py-40">
          <Loading size="lg" />
        </div>
      ) : data !== null && data !== undefined ? (
        <div ref={parcelRef}>
          <ParcelDetails parcelData={data} />
        </div>
      ) : (
        <div className="grid place-items-center">
          <Image
            className="w-[30rem]"
            src={"/assets/images/no_data.png"}
            width={600}
            height={600}
            alt="no data"
          />
          <h1 className="text-xl font-bold">CANNOT GET PARCEL DATA</h1>
        </div>
      )}
    </div>
  );
};

export default ParcelDetailsPage;
