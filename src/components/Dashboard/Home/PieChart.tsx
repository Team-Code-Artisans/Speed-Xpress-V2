import { ParcelType, Status } from "@/types/ParcelType";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ parcels }: { parcels: ParcelType[] }) => {
  const totalDelivered = parcels.filter(
    (parcel) => parcel.parcelStatus === Status.Delivered
  ).length;

  const pendingDelivered = parcels.filter(
    (parcel) => parcel.parcelStatus === Status.Pending
  ).length;

  const pickedDelivered = parcels.filter(
    (parcel) => parcel.parcelStatus === Status.Pending
  ).length;

  const returnDelivered = parcels.filter(
    (parcel) => parcel.parcelStatus === Status.Picked
  ).length;

  const cancelledDelivered = parcels.filter(
    (parcel) => parcel.parcelStatus === Status.Picked
  ).length;

  const data = {
    labels: ["Completed", "Pending", "Picked", "Return", "Cancelled"],
    datasets: [
      {
        label: "Total Parcel Summary",
        data: [
          totalDelivered,
          pendingDelivered,
          pickedDelivered,
          returnDelivered,
          cancelledDelivered,
        ],
        backgroundColor: [
          "#00a353",
          "#255ee5",
          "#D6B85A",
          "#f45b1d",
          "#dc2626",
        ],
      },
    ],
  };

  const options: any = {
    Plugin: {
      legend: true,
      Tooltip: true,
    },
  };

  return (
    <div>
      <Pie className="md:w-[25rem] w-[20rem]" data={data} options={options} />
    </div>
  );
};

export default PieChart;
