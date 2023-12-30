import { getSingleParcel } from "@/utils/api/parcel";

const ParcelDetailsView = async ({ params }: { params: { id: string } }) => {
  const parcelResponse = await getSingleParcel(params.id);

  if (parcelResponse.code === "success") {
    console.log(parcelResponse.data);
  } else {
    console.log(parcelResponse.error);
  }

  return (
    <div>
      ParcelDetailsView{" "}
      {parcelResponse.code === "success"
        ? parcelResponse.data.parcelId
        : parcelResponse.error.message}
    </div>
  );
};

export default ParcelDetailsView;
