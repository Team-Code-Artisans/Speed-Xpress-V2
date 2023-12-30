import ParcelDetails from "@/components/Dashboard/Parcels/ParcelDetails";
import { getSingleParcel } from "@/utils/api/parcel";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

const ParcelDetailsPage = async ({ params }: { params: { id: string } }) => {
  const parcelResponse = await getSingleParcel(params.id);

  return (
    <div className="lg:py-20 py-10 px-4 max-w-screen-xl mx-auto space-y-8">
      <h1 className="font-bold text-4xl">
        <span className="text-primary">PARCEL</span> DETAILS
      </h1>
      <Divider />
      {parcelResponse.code === "success" && parcelResponse.data !== null ? (
        <ParcelDetails parcelData={parcelResponse.data} />
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
