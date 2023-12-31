"use client";

import HeroVideo from "./HeroVideo";
import ModalButton from "./ModalButton";

const Hero = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-primary font-medium">
            Welcome to Speed Xpress
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mx-auto lg:text-5xl">
            Swift, Secure, Seamless Experience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-700">
              Effortless Parcel Management
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 max-sm:text-sm">
            Send, receive, and track with ease. Tailored dashboards for
            customers, merchants, and admins. Your shortcut to efficient parcel
            management.
          </p>
          <div className="flex items-center justify-center sm:max-w-sm mx-auto">
            <input
              className="p-4 border border-r-0 border-solid border-primary rounded-l-md bg-transparent focus:outline-none w-full"
              type="text"
              placeholder="Parcel ID Here"
            />
            <ModalButton />
          </div>
        </div>
        <div className="mt-14">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
