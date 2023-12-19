import Link from "next/link";
import React from "react";
import ParcelForm from "./ParcelForm";
import { Divider } from "@nextui-org/react";
import ParcelSummary from "./ParcelSummary";

const CreateParcel = () => {
  return (
    <div className="lg:py-20 py-10 px-4 max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-5 place-items-center lg:place-items-start gap-6 relative">
        <div className="lg:col-span-3 space-y-6">
          <h1 className="font-bold text-4xl select-none h-10">
            CREATE<span className="text-primary"> PARCEL</span>
          </h1>
          <Divider />
          {/* parcel form */}
          <ParcelForm />
        </div>

        <div className="space-y-6 bg-gray-200 dark:bg-gray-900 w-full sm:max-w-xl p-6 lg:p-10 lg:col-span-2 lg:sticky top-20 lg:mt-[60px] rounded-lg">
          {/* parcel summary */}
          <ParcelSummary />
        </div>
      </div>
    </div>
  );
};

export default CreateParcel;
