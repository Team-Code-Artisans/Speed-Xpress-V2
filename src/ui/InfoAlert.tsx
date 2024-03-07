"use client";

import { useState } from "react";

const InfoAlert = ({ message }: { message: string }) => {
  const [show, setShow] = useState(true);

  return (
    <div
      className={`px-4 py-2 rounded-xl bg-primary text-light max-sm:w-full sm:min-w-[25rem] lg:min-w-[40rem] ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between py-2">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="self-center ml-3">
            <span className="font-semibold">Info</span>
            <div className="mt-1 capitalize">{message}</div>
          </div>
        </div>
        <button className="self-start " onClick={() => setShow(!show)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InfoAlert;
