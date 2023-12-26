"use client";

import { useEffect, useRef } from "react";

const HeroVideo = () => {
  const videoRef = useRef<any>(null);
  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);

  return (
    <video
      autoPlay
      loop
      muted
      ref={videoRef}
      src="/assets/videos/logistics.mp4"
      className="w-full object-cover sm:h-[40rem] shadow-lg rounded-lg"
    />
  );
};

export default HeroVideo;
