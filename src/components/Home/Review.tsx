"use client";

import { reviewsData } from "@/data/reviewsData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Review = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? reviewsData.length - 2 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === reviewsData.length - 2 ? 0 : currentSlider + 1
    );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 1024;

  return (
    <div className="max-w-screen-xl mx-auto px-4 pb-20 space-y-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize text-center">
        What our <span className="text-primary">client </span>says
      </h1>

      <div className="max-w-full mx-auto min-h-min flex flex-row items-center overflow-hidden">
        <div className="relative overflow-hidden">
          <div className="absolute w-full h-full flex items-center justify-between z-50">
            {/* arrow left */}
            <button
              onClick={prevSlider}
              className="flex justify-center items-center bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 md:w-8 md:h-8 text-4xl"
            >
              <MdKeyboardArrowLeft />
            </button>
            {/* arrow right */}
            <button
              onClick={nextSlider}
              className="flex justify-center items-center bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 md:w-8 md:h-8 text-4xl"
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex gap-4"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 100 : 50)
              }%)`,
            }}
          >
            {/* sliders */}
            {reviewsData.map((review, i) => (
              <div
                key={i}
                className="px-4 py-8 border dark:border-gray-800 border-gray-200 rounded shadow min-w-full lg:min-w-[calc(50%-1rem)]"
              >
                <div className="block md:flex justify-center items-center gap-6">
                  <Image
                    width={600}
                    height={600}
                    src={review.img}
                    alt="image"
                    className="block w-32 object-cover h-32"
                  />
                  <div className="text-left">
                    <div className="flex justify-between">
                      <p className="py-3.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <AiFillStar
                            key={star}
                            className="inline-block text-primary"
                          />
                        ))}
                      </p>
                      <FaQuoteRight size={"2rem"} className="text-primary" />
                    </div>
                    <p className="text-gray-600 text-sm">
                      {review.ReviewDetails}
                    </p>
                    <h5 className="text-lg font-medium py-2.5">
                      By <span className="text-primary">{review.Name}</span>
                    </h5>
                    <p className="text-gray-600 text-sm">{review.Profession}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
