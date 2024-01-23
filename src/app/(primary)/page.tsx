import FAQ from "@/components/Home/FAQ/FAQ";
import Feature from "@/components/Home/Feature";
import GetStarted from "@/components/Home/GetStarted";
import Hero from "@/components/Home/Hero/Hero";
import LogoCloud from "@/components/Home/LogoCloud";
import OrderNow from "@/components/Home/OrderNow";
import OrderPlace from "@/components/Home/OrderPlace";
import Processes from "@/components/Home/Processes";
import Review from "@/components/Home/Review";
import WhatSend from "@/components/Home/WhatSend";
import WhatWeOffer from "@/components/Home/WhatWeOffer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <Processes />
      <Feature />
      <WhatSend />
      <OrderPlace />
      <OrderNow />
      <FAQ />
      <LogoCloud />
      <Review />
      <GetStarted />
    </>
  );
};

export default HomePage;
