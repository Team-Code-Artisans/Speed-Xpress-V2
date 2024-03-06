"use client";

import { TrackingModalType } from "@/types/ModalType";
import { Status } from "@/types/ParcelType";
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
  MdOutlineCreateNewFolder,
  MdOutlinePendingActions,
  MdOutlineWarehouse,
} from "react-icons/md";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const TrackingModal = ({ onOpenChange, isOpen, parcel }: TrackingModalType) => {
  let date = "";
  let time = "";

  const deliveryDateTime = parcel?.deliveryDateTime;

  if (deliveryDateTime) {
    [date, time] = deliveryDateTime.split(", ") as string[];
  }

  return (
    <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="p-4">
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-between gap-2">
              <h1>
                <span className="font-normal">Parcel ID: </span>
                {parcel?.parcelId ?? ""}
              </h1>
              <h1>
                <span className="font-normal">Date: </span> {date ?? ""}
              </h1>
            </ModalHeader>
            <ModalBody>
              <Divider />
              <Progress
                isStriped
                aria-label="Status..."
                color="primary"
                value={
                  parcel?.parcelStatus === Status.Pending
                    ? 25
                    : parcel?.parcelStatus === Status.Accepted
                    ? 50
                    : parcel?.parcelStatus === Status.Picked
                    ? 75
                    : parcel?.parcelStatus === Status.Delivered
                    ? 100
                    : 0
                }
                className="w-full"
              />
              <div className="flex gap-2 text-2xl justify-between px-2">
                <MdOutlineCreateNewFolder
                  className={`${
                    parcel?.parcelStatus === Status.Pending && "text-primary"
                  }`}
                />
                <MdOutlinePendingActions
                  className={`${
                    parcel?.parcelStatus === Status.Pending && "text-primary"
                  }`}
                />
                <MdOutlineWarehouse
                  className={`${
                    parcel?.parcelStatus === Status.Accepted && "text-primary"
                  }`}
                />
                <MdDirectionsBike
                  className={`${
                    parcel?.parcelStatus === Status.Picked && "text-primary"
                  }`}
                />
                <FaParachuteBox
                  className={`${
                    parcel?.parcelStatus === Status.Delivered && "text-primary"
                  }`}
                />
              </div>

              {/* Parcel details */}
              <div className="space-y-4 rounded-lg py-4">
                <div className="grid grid-cols-2">
                  <div>
                    <label htmlFor="sender name" className="text-sm">
                      Sender:
                    </label>
                    <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                      {parcel?.senderInfo?.name ?? ""}
                    </h1>
                  </div>
                  <div>
                    <label htmlFor="receiver address" className="text-sm">
                      Receiver:
                    </label>
                    <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                      {parcel?.recipientInfo?.name ?? ""}
                    </h1>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <label htmlFor="sender address" className="text-sm">
                      Address:
                    </label>
                    <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                      {parcel?.senderInfo?.address?.district ?? ""}
                    </h1>
                  </div>
                  <div>
                    <label htmlFor="receiver address" className="text-sm">
                      Address:
                    </label>
                    <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                      {parcel?.recipientInfo?.address?.district ?? ""}
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
                        {parcel?.paymentInfo?.method ?? ""}
                      </h1>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="price" className="text-sm">
                      Price:
                    </label>
                    <div>
                      <h1 className="sm:text-lg whitespace-nowrap capitalize">
                        ${parcel?.paymentInfo?.amount ?? ""}
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
                          {parcel?.parcelStatus ?? ""}
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
                          {parcel?.shippingMethod ?? ""}
                        </h1>
                      </Chip>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="flex justify-between items-center gap-2">
                <h1 className="font-semibold text-lg">
                  <span className="font-normal">Time: </span> {time ?? ""}
                </h1>
                <div className="flex gap-2">
                  <SecondaryButton onClick={onClose}>Close</SecondaryButton>
                  <PrimaryButton href={`/parcels/${parcel?.parcelId}`}>
                    More Details
                  </PrimaryButton>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default TrackingModal;
