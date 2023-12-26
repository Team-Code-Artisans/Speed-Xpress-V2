"use client";

import { useDisclosure } from "@nextui-org/react";
import TrackingModal from "./TrackingModal";

const ModalButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="px-4 max-sm:text-sm py-[19px] sm:py-[17px] border-solid rounded-r-md bg-primary text-light cursor-pointer transition duration-300 ease-in-out hover:bg-gradient-to-r from-primary to-secondary focus:outline-none whitespace-nowrap"
        type="button"
      >
        Track Parcel
      </button>

      <TrackingModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default ModalButton;
