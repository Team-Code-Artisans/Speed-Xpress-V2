import ParcelTable from "@/components/Parcels/ParcelTable";

const ParcelsPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="my-10">
        <h1 className="text-2xl font-semibold text-gray-600 capitalize lg:text-3xl">
          All <span className="text-primary">Parcels</span>
        </h1>

        <div className="mt-2">
          <span className="inline-block w-20 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>
      <ParcelTable />
    </div>
  );
};

export default ParcelsPage;
