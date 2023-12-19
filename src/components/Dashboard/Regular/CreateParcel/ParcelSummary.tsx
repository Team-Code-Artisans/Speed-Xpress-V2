import { Divider } from "@nextui-org/react";
import React from "react";

const ParcelSummary = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-bold text-2xl">
          PARCEL<span className="text-primary"> SUMMARY</span>
        </h1>
      </div>
      <div className="flex flex-col items-end w-full space-y-6">
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 dark:text-gray-400 text-gray-600">
            Shipping Fee
          </p>
          <p className="text-lg font-semibold leading-4 dark:text-gray-400 text-gray-600">
            20
          </p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 dark:text-gray-400 text-gray-600">
            Weight Charge
          </p>
          <p className="text-lg font-semibold leading-4 dark:text-gray-400 text-gray-600">
            $2790
          </p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 dark:text-gray-400 text-gray-600">
            Discount
          </p>
          <p className="text-lg font-semibold leading-4 text-danger"> - $00</p>
        </div>
        <Divider />
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 dark:text-gray-400 text-gray-600">
            Sub Total
          </p>
          <p className="text-lg font-semibold leading-4 dark:text-gray-400 text-gray-600">
            $3520
          </p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 dark:text-gray-400 text-gray-600">
            Including 5% Tax
          </p>
          <p className="text-lg font-semibold leading-4 dark:text-gray-400 text-gray-600">
            + $00
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full items-center pt-32">
        <p className="text-xl font-semibold leading-4">Estimated Total</p>
        <p className="text-lg font-semibold leading-4">$2900</p>
      </div>
    </div>
  );
};

export default ParcelSummary;
