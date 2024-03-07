import UserTable from "@/components/Dashboard/Users/UserTable";
import InfoAlert from "@/ui/InfoAlert";

const MerchantsPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      <div className="flex sm:flex-row flex-col justify-between gap-4 mb-10 sm:h-20">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold uppercase lg:text-3xl">
            All <span className="text-primary">MERCHANT</span>
          </h1>
          <>
            <span className="inline-block w-20 h-1 bg-primary rounded-full"></span>
            <span className="inline-block w-4 h-1 ml-1 bg-primary rounded-full"></span>
            <span className="inline-block w-2 h-1 ml-1 bg-primary rounded-full"></span>
          </>
        </div>
        <InfoAlert message="All merchant info ready to view" />
      </div>
      <UserTable />
    </div>
  );
};

export default MerchantsPage;
