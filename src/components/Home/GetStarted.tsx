import Link from "next/link";
import PrimaryButton from "../../ui/PrimaryButton";

const GetStarted = () => {
  return (
    <div className="container px-4 pb-20 mx-auto text-center space-y-4">
      <div className="max-w-lg mx-auto space-y-4">
        <h1 className="text-3xl font-semibold lg:text-4xl">
          Precision Logistics for Timely Deliveries and Cost Savings
        </h1>
        <PrimaryButton href="/login">Get Started Now &#10140;</PrimaryButton>
      </div>

      <div className="flex justify-center">
        <img
          className="object-cover w-full h-60 md:h-96 rounded-xl lg:w-4/5"
          src={"/assets/images/delivery.png"}
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default GetStarted;
