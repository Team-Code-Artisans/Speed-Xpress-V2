import { useInvoice } from "@/hooks/useInvoice";
import { PaymentStatus } from "@/types/ParcelType";
import { BsBox, BsBoxArrowInRight, BsBoxSeam } from "react-icons/bs";

const InvoiceStats = () => {
  const { invoices } = useInvoice();

  const totalAmount = invoices.reduce((accumulator, invoice) => {
    return accumulator + invoice.amount;
  }, 0);

  const pendingFilter = invoices.filter(
    (invoice) => invoice.status === PaymentStatus.Pending
  );

  const pendingAmount = pendingFilter.reduce((accumulator, invoice) => {
    return accumulator + invoice.amount;
  }, 0);

  const returnFilter = invoices.filter(
    (invoice) => invoice.status === PaymentStatus.Canceled
  );

  const returnAmount = returnFilter.reduce((accumulator, invoice) => {
    return accumulator + invoice.amount;
  }, 0);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold lg:text-3xl">
        INVOICE <span className="text-primary">SUMMARY</span>
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <div className=" space-y-4 rounded-xl bg-green-100 p-4 shadow-xl">
          <div className="bg-green-200 rounded-2xl p-2 inline-block shadow-xl">
            <BsBoxSeam size={"2rem"} className="text-green-600" />
          </div>

          <h3 className="text-xl font-semibold sm:text-2xl text-black">
            Total Payment
          </h3>

          <p className="text-lg text-gray-600 ">
            <span className=" text-2xl font-semibold pr-2">{totalAmount}</span>$
          </p>
        </div>
        <div className=" space-y-4 rounded-xl bg-blue-100 p-4 shadow-xl">
          <div className="bg-blue-200 rounded-2xl p-2 inline-block shadow-xl">
            <BsBox size={"2rem"} className=" text-blue-600" />
          </div>

          <h3 className="text-xl font-semibold sm:text-2xl text-black">
            Pending Payment
          </h3>

          <p className="text-lg text-gray-600 ">
            <span className=" text-2xl font-semibold pr-2">
              {pendingAmount}
            </span>
            $
          </p>
        </div>
        <div className=" space-y-4 rounded-xl bg-orange-100 p-4 shadow-xl">
          <div className="bg-blue-200 rounded-2xl p-2 inline-block shadow-xl">
            <BsBoxArrowInRight size={"2rem"} className="text-blue-600" />
          </div>

          <h3 className="text-xl font-semibold sm:text-2xl text-black">
            Total Returned
          </h3>

          <p className="text-lg text-gray-600 ">
            <span className=" text-2xl font-semibold pr-2">{returnAmount}</span>
            $
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceStats;
