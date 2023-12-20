export const calculateParcel = (
  division: string,
  deliveryOption: string,
  weight: string
) => {
  // Define constants
  const baseShippingFeeDhaka = 60;
  const baseShippingFeeOther = 80;
  const expressDeliveryFee = 40;
  const weightChargeRate = 10;
  const discountRate = 0.05;
  const taxRate = 0.05;

  // Calculate shipping fee based on division and delivery option
  let calculatedShippingFee = 0;
  if (division === "Dhaka") {
    calculatedShippingFee =
      deliveryOption === "standard"
        ? baseShippingFeeDhaka
        : baseShippingFeeDhaka + expressDeliveryFee;
  } else {
    calculatedShippingFee =
      deliveryOption === "standard"
        ? baseShippingFeeOther
        : baseShippingFeeOther + expressDeliveryFee;
  }

  // Calculate weight charge
  const calculatedWeightCharge = parseInt(weight) * weightChargeRate;

  // Calculate subTotal
  const calculatedSubTotal = calculatedShippingFee + calculatedWeightCharge;

  // Calculate discount
  const calculatedDiscount = calculatedSubTotal * discountRate;

  // Calculate tax
  const calculatedTax = calculatedSubTotal * taxRate;

  // Calculate estimated total
  const calculatedEstimatedTotal =
    calculatedSubTotal - calculatedDiscount + calculatedTax;

  return {
    shippingFee: calculatedShippingFee,
    weightCharge: parseFloat(calculatedWeightCharge.toFixed(2)),
    subTotal: parseFloat(calculatedSubTotal.toFixed(2)),
    discount: parseFloat(calculatedDiscount.toFixed(2)),
    tax: parseFloat(calculatedTax.toFixed(2)),
    estimatedTotal: parseFloat(calculatedEstimatedTotal.toFixed(2)),
  };
};
