import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../../ui/PrimaryButton";
import SecondaryButton from "../../ui/SecondaryButton";

const Processes = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/images/section1.png"}
            width={600}
            height={600}
            alt="image"
            className="w-[30rem]"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
            Streamline <span className="text-primary">Logistics</span> processes
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-500 line-clamp-3">
            The website should aim to streamline logistics processes, such as
            inventory management, order tracking, and delivery scheduling.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
            <PrimaryButton href="/login">Get Stated</PrimaryButton>
            <SecondaryButton href="/register">Order Now</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processes;
