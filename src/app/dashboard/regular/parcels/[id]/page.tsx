import { getSingleParcel } from "@/utils/api/parcel";

const ParcelDetailsView = async ({ params }: { params: { id: string } }) => {
  const parcelResponse = await getSingleParcel(params.id);
  console.log("parcelResponse:", parcelResponse);

  return <div>ParcelDetailsView {params.id}</div>;
};

export default ParcelDetailsView;
