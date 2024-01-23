import { FaGift, FaSitemap, FaDesktop } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { IoDocumentTextSharp } from "react-icons/io5";

const WhatSend = () => {
  const items = [
    {
      name: "GIFT",
      icon: <FaGift size={40} className="text-primary" />,
    },
    {
      name: "DOCUMENT",
      icon: <IoDocumentTextSharp size={40} className="text-primary" />,
    },
    {
      name: "PACKAGE",
      icon: <LuPackage size={40} className="text-primary" />,
    },
    {
      name: "ACCESSORIES",
      icon: <FaSitemap size={40} className="text-primary" />,
    },
    {
      name: "ELECTRONICS",
      icon: <FaDesktop size={40} className="text-primary" />,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 pb-20 space-y-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize text-center">
        What <span className="text-primary">Can</span> You Send
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="dark:bg-gray-900 bg-white px-4 py-6 rounded-lg flex items-center flex-col gap-4"
          >
            {item.icon}
            <h1 className="text-lg md:text-xl font-semibold text-center">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatSend;
