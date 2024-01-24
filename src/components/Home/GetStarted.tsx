import PrimaryButton from "@/ui/PrimaryButton";
import Image from "next/image";
import delivery from "/public/assets/images/delivery.png";

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
        <Image
          className="object-cover w-full h-60 md:h-96 rounded-xl lg:w-4/5 contrast-80"
          src={delivery}
          width={2000}
          height={2000}
          alt="get started"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default GetStarted;
