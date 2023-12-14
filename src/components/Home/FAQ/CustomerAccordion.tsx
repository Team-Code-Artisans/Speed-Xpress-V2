import { Accordion, AccordionItem } from "@nextui-org/react";

const CustomerAccordion = () => {
  return (
    <Accordion
      variant="shadow"
      defaultExpandedKeys={["1"]}
      className="dark:bg-gray-900"
    >
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="How long does it take for my package to be delivered?"
      >
        <span className="text-gray-500">
          Delivery times vary depending on the destination and the service you
          choose. We offer different shipping options with estimated delivery
          times, and our team will provide you with the most accurate delivery
          estimates based on your specific requirements.
        </span>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="Can I request a quote for my shipping needs?"
      >
        <span className="text-gray-500">
          Absolutely! We offer a convenient online quote request form where you
          can provide details about your shipment, such as origin, destination,
          weight, and dimensions. Our team will review your request and provide
          you with a customized quote based on your specific needs.
        </span>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="How do you ensure the safety and security of my goods?"
      >
        <span className="text-gray-500">
          We prioritize the safety and security of your goods throughout the
          entire logistics process. We have robust security measures in place,
          including surveillance systems, trained personnel, and secure storage
          facilities. Additionally, we work with trusted partners and carriers
          to ensure the safe handling and transportation of your shipments.
        </span>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="Can you accommodate special handling requirements or sensitive items?"
      >
        <span className="text-gray-500">
          Yes, we understand that certain items require special handling or have
          specific requirements. Whether you have fragile goods, hazardous
          materials, temperature-sensitive products, or oversized items, we have
          the expertise and resources to handle them appropriately and ensure
          their safe delivery.
        </span>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomerAccordion;
