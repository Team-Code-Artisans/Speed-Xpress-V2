import React from "react";

const ParcelSummary = () => {
  return (
    <div className="space-y-6 bg-gray-200 dark:bg-gray-900 w-full sm:max-w-xl p-6 lg:p-10 lg:col-span-2 lg:place-self-start">
      <div>
        <h1 className="text-2xl font-semibold leading-6">Order Summary</h1>
      </div>
      <div className="flex mt-7 flex-col items-end w-full space-y-6">
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 text-gray-600">Total items</p>
          <p className="text-lg font-semibold leading-4 text-gray-600">20</p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 text-gray-600">Total Charges</p>
          <p className="text-lg font-semibold leading-4 text-gray-600">$2790</p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 text-gray-600">Shipping charges</p>
          <p className="text-lg font-semibold leading-4 text-gray-600">$90</p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 text-gray-600">Sub total</p>
          <p className="text-lg font-semibold leading-4 text-gray-600">$3520</p>
        </div>
      </div>
      <div className="flex justify-between w-full items-center mt-32">
        <p className="text-xl font-semibold leading-4">Estimated Total</p>
        <p className="text-lg font-semibold leading-4">$2900</p>
      </div>
    </div>
  );
};

export default ParcelSummary;
