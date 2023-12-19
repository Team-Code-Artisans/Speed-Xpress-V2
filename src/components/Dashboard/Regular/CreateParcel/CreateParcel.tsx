import Link from "next/link";
import React from "react";
import ParcelForm from "./ParcelForm";
import { Divider } from "@nextui-org/react";

const CreateParcel = () => {
  return (
    <div className="lg:py-20 py-10 px-4 max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-5 place-items-center lg:place-items-start gap-6">
        <div className="lg:col-span-3 space-y-6">
          <h1 className="font-bold text-4xl select-none">
            CREATE<span className="text-primary"> PARCEL</span>
          </h1>
          <Divider />
          <div>
            <ParcelForm />
          </div>
        </div>

        <div className="space-y-6 bg-gray-200 dark:bg-gray-800 w-full sm:max-w-xl p-6 md:p-14 lg:col-span-2 lg:place-self-start">
          <div>
            <h1 className="text-2xl font-semibold leading-6">Order Summary</h1>
          </div>
          <div className="flex mt-7 flex-col items-end w-full space-y-6">
            <div className="flex justify-between w-full items-center">
              <p className="text-lg leading-4 text-gray-600">Total items</p>
              <p className="text-lg font-semibold leading-4 text-gray-600">
                20
              </p>
            </div>
            <div className="flex justify-between w-full items-center">
              <p className="text-lg leading-4 text-gray-600">Total Charges</p>
              <p className="text-lg font-semibold leading-4 text-gray-600">
                $2790
              </p>
            </div>
            <div className="flex justify-between w-full items-center">
              <p className="text-lg leading-4 text-gray-600">
                Shipping charges
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-600">
                $90
              </p>
            </div>
            <div className="flex justify-between w-full items-center">
              <p className="text-lg leading-4 text-gray-600">Sub total</p>
              <p className="text-lg font-semibold leading-4 text-gray-600">
                $3520
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full items-center mt-32">
            <p className="text-xl font-semibold leading-4">Estimated Total</p>
            <p className="text-lg font-semibold leading-4">$2900</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateParcel;
