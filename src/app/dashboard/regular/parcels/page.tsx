import { getAllParcel } from "@/utils/api/parcel";

const ParcelsPage = async () => {
  const parcelResponse = await getAllParcel();
  console.log("parcelResponse:", parcelResponse);

  return <div>ParcelsPage</div>;
};

export default ParcelsPage;
