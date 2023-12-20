"use client";

import { calculateParcel } from "@/utils/calculateParcel";
import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ParcelForm from "./ParcelForm";
import ParcelSummary from "./ParcelSummary";

const CreateParcel = () => {
  // Parcel form states
  const [division, setDivision] = useState<string>("Dhaka");
  const [shippingMethod, setShippingMethod] = useState<string>("standard");
  const [weight, setWeight] = useState<string>("1");

  // Shipping calculation states
  const [shippingFee, setShippingFee] = useState<number>(0);
  const [weightCharge, setWeightCharge] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [estimatedTotal, setEstimatedTotal] = useState<number>(0);

  useEffect(() => {
    // Use the utility function to calculate parcel
    const {
      shippingFee: calculatedShippingFee,
      weightCharge: calculatedWeightCharge,
      subTotal: calculatedSubTotal,
      discount: calculatedDiscount,
      tax: calculatedTax,
      estimatedTotal: calculatedEstimatedTotal,
    } = calculateParcel(division, shippingMethod, weight);

    // Update state variables
    setShippingFee(calculatedShippingFee);
    setWeightCharge(calculatedWeightCharge);
    setSubTotal(calculatedSubTotal);
    setDiscount(calculatedDiscount);
    setTax(calculatedTax);
    setEstimatedTotal(calculatedEstimatedTotal);
  }, [division, shippingMethod, weight]);

  return (
    <div className="lg:py-20 py-10 px-4 max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-5 place-items-center lg:place-items-start gap-6 relative">
        <div className="lg:col-span-3 space-y-6">
          <h1 className="font-bold text-4xl h-10">
            CREATE<span className="text-primary"> PARCEL</span>
          </h1>
          <Divider />
          {/* parcel form */}
          <ParcelForm
            shippingMethod={shippingMethod}
            division={division}
            setShippingMethod={setShippingMethod}
            setDivision={setDivision}
            setWeight={setWeight}
            weight={weight}
            estimatedTotal={estimatedTotal}
          />
        </div>

        <div className="space-y-6 bg-gray-200 dark:bg-gray-900 w-full sm:max-w-xl p-6 lg:p-10 lg:col-span-2 lg:sticky top-20 lg:mt-[60px] rounded-lg">
          {/* parcel summary */}
          <ParcelSummary
            shippingFee={shippingFee}
            weightCharge={weightCharge}
            discount={discount}
            subTotal={subTotal}
            tax={tax}
            estimatedTotal={estimatedTotal}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateParcel;
