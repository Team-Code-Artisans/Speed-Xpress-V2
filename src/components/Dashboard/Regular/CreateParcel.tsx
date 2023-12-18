import Link from "next/link";
import React from "react";

const CreateParcel = () => {
  return (
    <div className=" flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
      <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
        <div className="flex w-full flex-col justify-start items-start">
          <div className="">
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
              Check out
            </p>
          </div>
          <div className="mt-2">
            <Link
              href="/"
              className=" text-base leading-4 focus:outline-none focus:underline hover:underline hover:text-gray-800 text-gray-600"
            >
              Back to my bag
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
          <div>
            <h1 className="text-2xl font-semibold leading-6 text-gray-800">
              Order Summary
            </h1>
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
            <p className="text-xl font-semibold leading-4 text-gray-800">
              Estimated Total
            </p>
            <p className="text-lg font-semibold leading-4 text-gray-800">
              $2900
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateParcel;
