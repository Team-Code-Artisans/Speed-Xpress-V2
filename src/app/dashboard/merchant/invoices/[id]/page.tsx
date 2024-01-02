import InvoiceDetails from "@/components/Dashboard/Invoices/InvoiceDetails";
import { getSingleInvoice } from "@/utils/api/invoice";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

const InvoiceDetailsPage = async ({ params }: { params: { id: string } }) => {
  const invoiceResponse = await getSingleInvoice(params.id);

  return (
    <div className="lg:py-20 py-10 px-6 max-w-screen-xl mx-auto space-y-8">
      <h1 className="font-bold text-4xl">
        <span className="text-primary">PARCEL</span> DETAILS
      </h1>
      <Divider />
      {invoiceResponse.code === "success" && invoiceResponse.data !== null ? (
        <InvoiceDetails invoiceData={invoiceResponse.data} />
      ) : (
        <div className="grid place-items-center">
          <Image
            className="w-[30rem]"
            src={"/assets/images/no_data.png"}
            width={600}
            height={600}
            alt="no data"
          />
          <h1 className="text-xl font-bold">CANNOT GET INVOICE DATA</h1>
        </div>
      )}
    </div>
  );
};

export default InvoiceDetailsPage;
