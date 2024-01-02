import { InvoiceType } from "@/types/invoiceType";
import { Chip, Divider } from "@nextui-org/react";

const InvoiceDetails = ({ invoiceData }: { invoiceData: InvoiceType }) => {
  const [date, time] = invoiceData?.paymentDateTime.split(", ");

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
      {/* User info */}
      <div className="space-y-4 p-6 sm:p-8 dark:bg-gray-900 bg-gray-200 rounded-lg">
        <h1 className="text-xl font-medium">USER INFO</h1>
        <Divider />
        <div>
          <label htmlFor="name" className="text-sm">
            Name:
          </label>
          <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
            {invoiceData?.userName || ""}
          </h1>
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email:
          </label>
          <h1 className="text-lg sm:text-xl">{invoiceData?.userEmail || ""}</h1>
        </div>
        <div>
          <label htmlFor="role" className="text-sm">
            User Role:
          </label>
          <h1 className="text-lg sm:text-xl uppercase">
            {invoiceData?.userRole || ""}
          </h1>
        </div>
        <div>
          <label htmlFor="parcel id" className="text-sm">
            Parcel ID:
          </label>
          <h1 className="text-lg sm:text-xl">{invoiceData?.parcelId || ""}</h1>
        </div>
      </div>

      {/* Invoice info */}
      <div className="space-y-4 p-6 sm:p-8 dark:bg-gray-900 bg-gray-200 rounded-lg">
        <h1 className="text-xl font-medium">USER INFO</h1>
        <Divider />
        <div>
          <label htmlFor="id" className="text-sm">
            Invoice ID:
          </label>
          <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
            {invoiceData?.invoiceId || ""}
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
            <label htmlFor="method" className="text-sm">
              Payment Method:
            </label>
            <div>
              <Chip variant="bordered">
                <h1 className="sm:text-lg whitespace-nowrap capitalize">
                  {invoiceData?.paymentMethod || ""}
                </h1>
              </Chip>
            </div>
          </div>
          <div>
            <label htmlFor="status" className="text-sm">
              Invoice Status:
            </label>
            <div>
              <Chip variant="bordered">
                <h1 className="sm:text-lg whitespace-nowrap capitalize">
                  {invoiceData?.status || ""}
                </h1>
              </Chip>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <label htmlFor="currency" className="text-sm">
              Currency:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap uppercase">
              {invoiceData?.currency || ""}
            </h1>
          </div>
          <div>
            <label htmlFor="amount" className="text-sm">
              Amount:
            </label>
            <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
              ${invoiceData?.amount || ""}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
