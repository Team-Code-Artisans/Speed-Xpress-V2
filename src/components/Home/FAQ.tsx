"use client";
import { Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import CustomerAccordion from "./FAQ/CustomerAccordion";
import RiderAccordion from "./FAQ/RiderAccordion";

export default function FAQ() {
  return (
    <div className="max-w-screen-xl mx-auto pb-20">
      <div className="flex justify-center items-center">
        <span className="w-1 h-5 bg-primary"></span>
        <p className="text-sm font-bold px-2">F A Q</p>
        <h2>Test</h2>
      </div>
      <h2 className="text-center text-3xl lg:text-5xl font-semibold mb-10 mt-5">
        Get Your <span className="text-primary">Queries Solved</span>
      </h2>

      <div className="grid md:grid-cols-2 w-full mx-auto px-2 gap-10">
        <div className="max-md:order-last place-self-center">
          <Image
            src={"/assets/images/FAQ.png"}
            width={600}
            height={600}
            alt="image"
            className="w-[30rem]"
          />
        </div>
        <div className="flex flex-col mx-auto md:h-[30rem]">
          <Tabs aria-label="Options" className="">
            <Tab key="photos" title="I'm a customer">
              <CustomerAccordion />
            </Tab>
            <Tab key="music" title="I'm a rider">
              <RiderAccordion />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
