"use client";

import { ModalDisclosureType } from "@/types/ModalDisclosureType";
import {
  Chip,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Progress,
} from "@nextui-org/react";
import { FaParachuteBox } from "react-icons/fa";
import {
  MdDirectionsBike,
  MdOutlinePendingActions,
  MdOutlineWarehouse,
  MdPayment,
} from "react-icons/md";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const TrackingModal = ({ onOpenChange, isOpen }: ModalDisclosureType) => {
  return (
    <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="p-4">
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-between gap-2">
              <h1>Parcel ID:</h1>
              <h1>Date:</h1>
            </ModalHeader>
            <ModalBody>
              <Divider />
              <Progress
                isStriped
                aria-label="Status..."
                color="primary"
                value={80}
                className="w-full"
              />
              <div className="flex gap-2 text-2xl justify-between">
                <MdOutlinePendingActions />
                <MdOutlineWarehouse />
                <MdPayment />
                <MdDirectionsBike />
                <FaParachuteBox />
              </div>

              {/* Parcel details */}
              <div className="space-y-4 rounded-lg py-4">
                <div className="grid grid-cols-2">
                  <div>
                    <label htmlFor="sender name" className="text-sm">
                      Sender:
                    </label>
                    <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                      {""}
                    </h1>
                  </div>
                  <div>
                    <label htmlFor="time" className="text-sm">
                      Receiver:
                    </label>
                    <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                      {""}
                    </h1>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <label htmlFor="sender address" className="text-sm">
                      Address:
                    </label>
                    <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                      {""}
                    </h1>
                  </div>
                  <div>
                    <label htmlFor="receiver address" className="text-sm">
                      Address:
                    </label>
                    <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                      {""}
                    </h1>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <label htmlFor="payment method" className="text-sm">
                      Payment:
                    </label>
                    <div>
                      <h1 className="sm:text-lg whitespace-nowrap capitalize">
                        {"Card"}
                      </h1>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="price" className="text-sm">
                      Price:
                    </label>
                    <div>
                      <h1 className="sm:text-lg whitespace-nowrap capitalize">
                        {"200"}
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div>
                    <label htmlFor="parcel status" className="text-sm">
                      Parcel Status:
                    </label>
                    <div>
                      <Chip variant="bordered">
                        <h1 className="sm:text-lg whitespace-nowrap capitalize">
                          {"Completed"}
                        </h1>
                      </Chip>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="shipping method" className="text-sm">
                      Shipping Method:
                    </label>
                    <div>
                      <Chip variant="bordered">
                        <h1 className="sm:text-lg whitespace-nowrap capitalize">
                          {"Express"}
                        </h1>
                      </Chip>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="flex justify-end gap-2">
                <SecondaryButton onClick={onClose}>Close</SecondaryButton>
                <PrimaryButton>More Details</PrimaryButton>
              </div>
            </ModalBody>
            {/* <ModalFooter></ModalFooter> */}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default TrackingModal;
