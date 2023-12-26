import FAQ from "@/components/Home/FAQ/FAQ";
import Feature from "@/components/Home/Feature";
import GetStarted from "@/components/Home/GetStarted";
import Hero from "@/components/Home/Hero/Hero";
import OrderNow from "@/components/Home/OrderNow";
import OrderPlace from "@/components/Home/OrderPlace";
import Processes from "@/components/Home/Processes";
import WhatWeOffer from "@/components/Home/WhatWeOffer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhatWeOffer />
      <Processes />
      <Feature />
      <OrderPlace />
      <OrderNow />
      <FAQ />
      <GetStarted />
    </div>
  );
};

export default HomePage;
