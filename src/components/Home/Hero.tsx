"use client";

import { useDisclosure } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import TrackingModal from "./TrackingModal";

export default function Hero() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    // @ts-ignore
    video.play();
  }, []);

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-primary font-medium">
            Welcome to Speed Xpress
          </h1>
          <h2 className="text-3xl sm:text-4xl font-extrabold mx-auto lg:text-5xl">
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
            <button
              onClick={onOpen}
              className="px-4 py-[17px] border-solid rounded-r-md bg-primary text-light cursor-pointer transition duration-300 ease-in-out hover:bg-gradient-to-r from-primary to-secondary focus:outline-none whitespace-nowrap"
              type="button"
            >
              Track Parcel
            </button>

            {/* Tracking Modal */}
            <TrackingModal isOpen={isOpen} onOpenChange={onOpenChange} />
          </div>
        </div>
        <div className="mt-14">
          <video
            autoPlay
            loop
            muted
            ref={videoRef}
            src="/assets/videos/logistics.mp4"
            className="w-full object-cover sm:h-[40rem] shadow-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
