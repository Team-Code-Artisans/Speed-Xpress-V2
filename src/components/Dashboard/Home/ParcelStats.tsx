import { ParcelType, Status } from "@/types/ParcelType";
import { BsBox, BsBoxArrowInRight, BsBoxSeam } from "react-icons/bs";

const ParcelStats = ({ parcels }: { parcels: ParcelType[] }) => {
  const totalDelivered = parcels.filter(
    (parcel) => parcel.parcelStatus === Status.Delivered
  ).length;

  const pendingDelivered = parcels.filter(
    (parcel) => parcel.parcelStatus === Status.Pending
  ).length;

  const returnDelivered = parcels.filter(
    (parcel) => parcel.parcelStatus === Status.Returned
  ).length;

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold lg:text-3xl">
        PARCEL <span className="text-primary">SUMMARY</span>
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <div className=" space-y-4 rounded-xl bg-green-100 p-4 shadow-xl">
          <div className="bg-green-200 rounded-2xl p-2 inline-block shadow-xl">
            <BsBoxSeam size={"2rem"} className="text-green-600" />
          </div>

          <h3 className="text-xl font-semibold sm:text-2xl text-black">
            Total Delivered
          </h3>

          <p className="text-lg text-gray-600 ">
            <span className=" text-2xl font-semibold pr-2">
              {totalDelivered}
            </span>
            parcels
          </p>
        </div>
        <div className=" space-y-4 rounded-xl bg-blue-100 p-4 shadow-xl">
          <div className="bg-blue-200 rounded-2xl p-2 inline-block shadow-xl">
            <BsBox size={"2rem"} className=" text-blue-600" />
          </div>

          <h3 className="text-xl font-semibold sm:text-2xl text-black">
            Pending Delivery
          </h3>

          <p className="text-lg text-gray-600 ">
            <span className=" text-2xl font-semibold pr-2">
              {pendingDelivered}
            </span>
            parcels
          </p>
        </div>
        <div className=" space-y-4 rounded-xl bg-orange-100 p-4 shadow-xl">
          <div className="bg-blue-200 rounded-2xl p-2 inline-block shadow-xl">
            <BsBoxArrowInRight size={"2rem"} className="text-blue-600" />
          </div>

          <h3 className="text-xl font-semibold sm:text-2xl text-black">
            Total Returned
          </h3>

          <p className="text-lg text-gray-600 ">
            <span className=" text-2xl font-semibold pr-2">
              {returnDelivered}
            </span>
            parcels
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParcelStats;
