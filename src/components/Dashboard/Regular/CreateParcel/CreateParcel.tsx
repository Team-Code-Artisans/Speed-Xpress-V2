import Link from "next/link";
import React from "react";
import ParcelForm from "./ParcelForm";
import { Divider } from "@nextui-org/react";
import ParcelSummary from "./ParcelSummary";

const CreateParcel = () => {
  return (
    <div className="lg:py-20 py-10 px-4 max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-5 place-items-center lg:place-items-start gap-6">
        <div className="lg:col-span-3 space-y-6">
          <h1 className="font-bold text-4xl select-none">
            CREATE<span className="text-primary"> PARCEL</span>
          </h1>
          <Divider />
          <ParcelForm />
        </div>

        <ParcelSummary />
      </div>
    </div>
  );
};

export default CreateParcel;
