import Feature from "@/components/Home/Feature";
import Hero from "@/components/Home/Hero";
import Processes from "@/components/Home/Processes";
import WhatWeOffer from "@/components/Home/WhatWeOffer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhatWeOffer />
      <Processes />
      <Feature />
    </div>
  );
};

export default HomePage;
