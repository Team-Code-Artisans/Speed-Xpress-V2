import ParcelTable from "@/components/Dashboard/Parcels/ParcelTable";

const CompletedDeliveries = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      <div className="pb-10 space-y-2">
        <h1 className="text-2xl font-semibold text-gray-600 capitalize lg:text-3xl">
          COMPLETED <span className="text-primary">PARCELS</span>
        </h1>

        <>
          <span className="inline-block w-20 h-1 bg-primary rounded-full"></span>
          <span className="inline-block w-4 h-1 ml-1 bg-primary rounded-full"></span>
          <span className="inline-block w-2 h-1 ml-1 bg-primary rounded-full"></span>
        </>
      </div>
      <ParcelTable />
    </div>
  );
};

export default CompletedDeliveries;
