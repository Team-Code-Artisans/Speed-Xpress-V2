import { ParcelType } from "@/types/ParcelType";
import { Chip, Divider } from "@nextui-org/react";

const ParcelDetails = ({ parcelData }: { parcelData: ParcelType }) => {
  const [date, time] = parcelData?.deliveryDateTime.split(", ");

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
      {/* Sender info */}
      {parcelData?.senderInfo && (
        <div className="space-y-4 p-6 sm:p-8 dark:bg-gray-900 bg-gray-200 rounded-lg">
          <h1 className="text-xl font-medium">SENDER INFO</h1>
          <Divider />
          <div>
            <label htmlFor="name" className="text-sm">
              Name:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {parcelData?.senderInfo?.name || ""}
            </h1>
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email:
            </label>
            <h1 className="text-lg sm:text-xl">
              {parcelData?.senderInfo?.email || ""}
            </h1>
          </div>
          <div>
            <label htmlFor="number" className="text-sm">
              Number:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap">
              {parcelData?.senderInfo?.number || ""}
            </h1>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <label htmlFor="division" className="text-sm">
                Division:
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                {parcelData?.senderInfo?.address?.division || ""}
              </h1>
            </div>
            <div>
              <label htmlFor="district" className="text-sm">
                District:
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                {parcelData?.senderInfo?.address?.district || ""}
              </h1>
            </div>
          </div>
          <div>
            <label htmlFor="address" className="text-sm">
              Address:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {parcelData?.senderInfo?.address?.address || ""}
            </h1>
          </div>
        </div>
      )}

      {/* Merchant info */}
      {parcelData?.merchantInfo && (
        <div className="space-y-4 p-6 sm:p-8 dark:bg-gray-900 bg-gray-200 rounded-lg">
          <h1 className="text-xl font-medium">MERCHANT INFO</h1>
          <Divider />
          <div>
            <label htmlFor="name" className="text-sm">
              Owner Name:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {parcelData?.merchantInfo?.ownerName || ""}
            </h1>
          </div>
          <div>
            <label htmlFor="name" className="text-sm">
              Shop Name:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {parcelData?.merchantInfo?.shopName || ""}
            </h1>
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email:
            </label>
            <h1 className="text-lg sm:text-xl">
              {parcelData?.merchantInfo?.email || ""}
            </h1>
          </div>
          <div>
            <label htmlFor="number" className="text-sm">
              Number:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap">
              {parcelData?.merchantInfo?.number || ""}
            </h1>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <label htmlFor="division" className="text-sm">
                Division:
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                {parcelData?.merchantInfo?.address?.division || ""}
              </h1>
            </div>
            <div>
              <label htmlFor="district" className="text-sm">
                District:
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                {parcelData?.merchantInfo?.address?.district || ""}
              </h1>
            </div>
          </div>
          <div>
            <label htmlFor="address" className="text-sm">
              Address:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {parcelData?.merchantInfo?.address?.address || ""}
            </h1>
          </div>
        </div>
      )}

      {/* Receipt info */}
      <div className="space-y-4 p-6 sm:p-8 dark:bg-gray-900 bg-gray-200 rounded-lg">
        <h1 className="text-xl font-medium">RECEIPT INFO</h1>
        <Divider />
        <div>
          <label htmlFor="name" className="text-sm">
            Name:
          </label>
          <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
            {parcelData?.recipientInfo?.name || ""}
          </h1>
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email:
          </label>
          <h1 className="text-lg sm:text-xl">
            {parcelData?.recipientInfo?.email || ""}
          </h1>
        </div>
        <div>
          <label htmlFor="number" className="text-sm">
            Number:
          </label>
          <h1 className="text-lg sm:text-xl whitespace-nowrap">
            {parcelData?.recipientInfo?.number || ""}
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <label htmlFor="division" className="text-sm">
              Division:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {parcelData?.recipientInfo?.address?.division || ""}
            </h1>
          </div>
          <div>
            <label htmlFor="district" className="text-sm">
              District:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {parcelData?.recipientInfo?.address?.district || ""}
            </h1>
          </div>
        </div>
        <div>
          <label htmlFor="address" className="text-sm">
            Address:
          </label>
          <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
            {parcelData?.recipientInfo?.address?.address || ""}
          </h1>
        </div>
      </div>

      <div className="space-y-4 p-6 sm:p-8 dark:bg-gray-900 bg-gray-200 rounded-lg">
        <h1 className="text-xl font-medium">PARCEL INFO</h1>
        <Divider />
        <div>
          <label htmlFor="id" className="text-sm">
            Parcel ID:
          </label>
          <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
            {parcelData?.parcelId || ""}
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <label htmlFor="date" className="text-sm">
              Date:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {date || ""}
            </h1>
          </div>
          <div>
            <label htmlFor="time" className="text-sm">
              Time:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {time || ""}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <label htmlFor="parcel status" className="text-sm">
              Parcel Status:
            </label>
            <div>
              <Chip variant="bordered">
                <h1 className="sm:text-lg whitespace-nowrap capitalize">
                  {parcelData?.parcelStatus || ""}
                </h1>
              </Chip>
            </div>
          </div>
          <div>
            <label htmlFor="shipping method" className="text-sm">
              Shipping Method:
            </label>
            <div>
              <Chip variant="bordered">
                <h1 className="sm:text-lg whitespace-nowrap capitalize">
                  {parcelData?.shippingMethod || ""}
                </h1>
              </Chip>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <label htmlFor="weight" className="text-sm">
              Weight:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {parcelData?.parcelWeight || ""} KG
            </h1>
          </div>
          <div>
            <label htmlFor="quantity" className="text-sm">
              Quantity:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {parcelData?.parcelQuantity || ""} PCS
            </h1>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="text-sm">
            Description:
          </label>
          <h1 className="text-lg line-clamp-3">
            {parcelData?.description === ""
              ? "..."
              : parcelData?.description || "..."}
          </h1>
        </div>
      </div>

      {/* Payment info */}
      <div className="space-y-4 p-6 sm:p-8 dark:bg-gray-900 bg-gray-200 rounded-lg">
        <h1 className="text-xl font-medium">PAYMENT INFO</h1>
        <Divider />
        <div className="grid grid-cols-2">
          <div>
            <label htmlFor="payment method" className="text-sm">
              Payment Method:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {parcelData?.paymentInfo?.method || ""}
            </h1>
          </div>
          <div>
            <label htmlFor="amount" className="text-sm">
              Amount:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              {parcelData?.paymentInfo?.amount || ""}
            </h1>
          </div>
        </div>
        <div>
          <label htmlFor="payment status" className="text-sm">
            Payment Status:
          </label>
          <div>
            <Chip variant="bordered">
              <h1 className="sm:text-lg whitespace-nowrap capitalize">
                {parcelData?.paymentInfo?.status || ""}
              </h1>
            </Chip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetails;
