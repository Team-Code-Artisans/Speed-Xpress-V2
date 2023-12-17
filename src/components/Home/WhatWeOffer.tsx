import {
  MdOutlineShareLocation,
  MdAddHome,
  MdAttachMoney,
} from "react-icons/md";

const WhatWeOffer = () => {
  return (
    <div className="max-w-screen-xl mx-auto pb-20 px-4">
      <div className="border border-gray-200 dark:border-gray-800 md:p-8 p-4 rounded-2xl bg-light dark:bg-dark shadow-xl">
        <div className="grid md:grid-cols-2 gap-4 pb-8">
          <div className="space-y-6">
            <div className="group relative inline-block text-sm font-medium text-primary">
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-primary transition-transform group-hover:translate-y-0 group-hover:translate-x-0 rounded-full"></span>
              <span className="relative block border border-current bg-light dark:bg-gray-900 px-8 py-3 font-bold rounded-full cursor-pointer">
                FEATURES
              </span>
            </div>
            <h2 className="md:text-4xl font-bold text-3xl lg:max-w-md">
              WHAT WE OFFER
            </h2>
          </div>
          <p className="md:text-lg text-gray-500 border-l-4 border-primary pl-8  flex items-center line-clamp-3">
            The website should have an intuitive and easy-to-navigate interface,
            making it simple for users to access and utilize the various
            features.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="block space-y-6 rounded-xl bg-blue-200 dark:bg-gray-900 shadow-xl p-4 sm:p-6 lg:p-8">
            <div className="bg-primary rounded-full p-2 inline-block shadow-xl">
              <MdOutlineShareLocation size={"4rem"} className="text-light" />
            </div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              TRANSPARENT PRICING
            </h3>
            <p className="text-lg text-gray-500 line-clamp-3">
              Globally initiate resource maximizing to- tal linkage via enabled
              process improvements.
            </p>
          </div>
          <div className="block space-y-6 rounded-xl bg-blue-200 dark:bg-gray-900 shadow-xl p-4 sm:p-6 lg:p-8">
            <div className="bg-primary rounded-full p-2 inline-block shadow-xl">
              <MdAddHome size={"4rem"} className="text-light" />
            </div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              WAREHOUSE STORAGE
            </h3>
            <p className="text-lg text-gray-500 line-clamp-3">
              This includes tracking stock levels, receiving notifications for
              low stock, and generating reports on inventory status.
            </p>
          </div>
          <div className="block space-y-6 rounded-xl bg-blue-200 dark:bg-gray-900 shadow-xl p-4 sm:p-6 lg:p-8">
            <div className="bg-primary rounded-full p-2 inline-block shadow-xl">
              <MdAttachMoney size={"4rem"} className="text-light" />
            </div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              ONLINE TRACKING
            </h3>
            <p className="text-lg text-gray-500 line-clamp-3">
              Provide a comprehensive tracking system that allows users to track
              their shipments in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
