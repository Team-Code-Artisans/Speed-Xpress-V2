import { ParcelSummaryType } from "@/types/ParcelType";
import { Divider } from "@nextui-org/react";

const ParcelSummary = ({
  shippingFee,
  weightCharge,
  discount,
  subTotal,
  tax,
  estimatedTotal,
}: ParcelSummaryType) => {
  return (
    <div className="space-y-8">
      <h1 className="font-bold text-2xl">
        PARCEL<span className="text-primary"> SUMMARY</span>
      </h1>
      <div className="flex flex-col items-end w-full space-y-6">
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 dark:text-gray-400 text-gray-600">
            Shipping Fee
          </p>
          <p className="text-lg font-semibold leading-4 dark:text-gray-400 text-gray-600">
            {shippingFee}
          </p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 dark:text-gray-400 text-gray-600">
            Weight Charge
          </p>
          <p className="text-lg font-semibold leading-4 dark:text-gray-400 text-gray-600">
            ${weightCharge}
          </p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 dark:text-gray-400 text-gray-600">
            Discount 5%
          </p>
          <p className="text-lg font-semibold leading-4 text-danger">
            - ${discount}
          </p>
        </div>
        <Divider />
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 dark:text-gray-400 text-gray-600">
            Sub Total
          </p>
          <p className="text-lg font-semibold leading-4 dark:text-gray-400 text-gray-600">
            ${subTotal}
          </p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 dark:text-gray-400 text-gray-600">
            Including 5% Tax
          </p>
          <p className="text-lg font-semibold leading-4 dark:text-gray-400 text-gray-600">
            + ${tax}
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full items-center pt-32">
        <p className="text-xl font-semibold leading-4">Estimated Total</p>
        <p className="text-lg font-semibold leading-4">${estimatedTotal}</p>
      </div>
    </div>
  );
};

export default ParcelSummary;
