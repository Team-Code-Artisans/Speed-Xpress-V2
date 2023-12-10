import { Accordion, AccordionItem } from "@nextui-org/react";

const RiderAccordion = () => {
  return (
    <Accordion variant="shadow" defaultExpandedKeys={["1"]}>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="How do I sign up to become a rider?"
      >
        <span className="text-gray-500">
          To sign up as a rider, visit our Sign up page and Register as a Rider.
          Follow the on-screen instructions to create an account, provide the
          necessary information, and submit the required documents. Once your
          application is reviewed and approved, you{"'"}ll be ready to start
          taking delivery assignments.
        </span>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="What types of vehicles are accepted for deliveries?"
      >
        <span className="text-gray-500">
          We accept a variety of vehicles, including bicycles, scooters,
          motorbikes, and cars. The specific vehicle requirements may vary based
          on your location and the services offered in that area. Ensure that
          your vehicle meets our criteria for safety and reliability.
        </span>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="How and when do I get paid for deliveries?"
      >
        <span className="text-gray-500">
          Payment is processed on a regular schedule, and the exact details will
          be provided during the onboarding process. Generally, payments are
          based on factors such as distance traveled, delivery time, and any
          applicable bonuses. You can expect to receive your earnings through
          the payment method you set up in your rider account.
        </span>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="What support is available if I encounter issues during a delivery?"
      >
        <span className="text-gray-500">
          We prioritize the safety and well-being of our riders. If you
          encounter any issues during a delivery, our customer support team is
          available to assist you. You can contact support through the app or
          website, and they will provide guidance or assistance to resolve the
          situation promptly. Additionally, we offer resources and training to
          help you handle common challenges effectively.
        </span>
      </AccordionItem>
    </Accordion>
  );
};

export default RiderAccordion;
