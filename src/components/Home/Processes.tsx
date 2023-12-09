import Image from "next/image";
import Link from "next/link";
import image from "../../../public/assets/images/section1.png";

const Processes = () => {
  return (
    <section className="mb-10">
      <div className="max-w-screen-xl flex flex-col justify-center py-8 mx-auto lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center md:w-1/2 px-10">
          <Image
            src={image}
            alt="image"
            loading="lazy"
            className="md:w-[80%] w-full"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold sm:text-6xl capitalize">
            Streamline <span className="text-blue-500">Logistics</span>{" "}
            processes
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            The website should aim to streamline logistics processes, such as
            inventory management, order tracking, and delivery scheduling.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              href="/login"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-lg font-semibold rounded text-white"
            >
              Get Started
            </Link>
            <Link
              href="/register"
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-semibold border rounded bg-blue-400 text-white"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processes;
