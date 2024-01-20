import ModalButton from "@/ui/ModalButton";
import Image from "next/image";

const TrackParcelPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/images/track-parcel.png"}
            width={600}
            height={600}
            alt="image"
            className="w-[30rem]"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
            Effortless <span className="text-primary">Tracking</span> Your{" "}
            <span className="text-primary">Parcel</span> Status
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-500 line-clamp-3">
            Track your parcel hassle-free with our intuitive system. Enter your
            parcel id for instant access to real-time status. Know the current
            status and expected delivery time.
          </p>
          <div className="flex items-center justify-center md:max-w-sm">
            <input
              className="p-4 border border-r-0 border-solid border-primary rounded-l-md bg-transparent focus:outline-none w-full"
              type="text"
              placeholder="Parcel ID Here"
            />
            <ModalButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackParcelPage;
