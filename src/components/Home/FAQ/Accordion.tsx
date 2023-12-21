"use client";

import { Tab, Tabs } from "@nextui-org/react";
import CustomerAccordion from "./CustomerAccordion";
import RiderAccordion from "./RiderAccordion";

const Accordion = () => {
  return (
    <Tabs aria-label="Options" color="primary">
      <Tab key="customer" title="I'm a customer">
        <CustomerAccordion />
      </Tab>
      <Tab key="rider" title="I'm a rider">
        <RiderAccordion />
      </Tab>
    </Tabs>
  );
};

export default Accordion;
