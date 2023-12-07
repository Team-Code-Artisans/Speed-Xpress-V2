"use client"

import React, { useEffect, useRef, useState } from "react"
import Navbar from "../Navbar/Navbar"

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [trackProduct, setTrackProduct] = useState([])

  const handleTrackFunction = (e: any) => {
    e.preventDefault()
    const id = e.target.id.value
    // setIsOpen(true)
    // getSingleParcel(id).then((res) => {
    //   setLoading(true)
    //   setTrackProduct(res)
    // })
  }

  //   {
  //     loading && <BigSpinner />
  //   }

  const videoRef = useRef<any>(null)
  useEffect(() => {
    const video = videoRef.current
    video.play()
  }, [])

  return (
    <div className="relative">
      <div className="md:absolute md:block w-full hidden">
        <Navbar />
      </div>

      <video
        src={"/assets/videos/logistics.mp4"}
        ref={videoRef}
        autoPlay
        loop
        muted
        className="w-full object-cover h-screen"
      />

      <div className="absolute z-10 md:top-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-dark text-shadow-xl shadow-sky-200 sm:w-[60%]"
          style={{
            textShadow: "2px 4px white",
          }}
        >
          Delivering Excellence, On Time, Every Time
        </h1>
      </div>

      <div className="w-full md:max-w-sm mt-6 bg-dark md:rounded-md absolute md:bottom-10 bottom-0 md:right-10">
        <form
          onSubmit={handleTrackFunction}
          className="flex flex-col md:flex-row"
        >
          <input
            required
            name="id"
            placeholder="Enter Tracking Number"
            className="flex-1 px-4 py-2 m-1 text-light text-center md:text-left placeholder-gray-400 placeholder:text-center md:placeholder:text-left bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
          />
          {/* <TrackingModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              trackProduct={trackProduct}
            /> */}
          <button
            type="submit"
            className="h-full px-4 py-4 text-light transition-colors duration-300 transform bg-primary hover:bg-sky-400 focus:outline-none focus:bg-sky-400"
          >
            Track Order
          </button>
        </form>
      </div>
    </div>
  )
}

export default Hero
