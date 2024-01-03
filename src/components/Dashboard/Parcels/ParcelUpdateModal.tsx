import { ModalDisclosureType } from "@/types/ModalDisclosureType";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import UpdateParcelForm from "./UpdateParcelForm";

const ParcelUpdateModal = ({
  onOpenChange,
  isOpen,
  id,
}: ModalDisclosureType) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      size="xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <h1 className="text-xl font-semibold">
                UPDATE
                <span className="text-primary"> PARCEL</span>
              </h1>
            </ModalHeader>
            <ModalBody>
              <UpdateParcelForm onClose={onClose} id={`${id}`} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ParcelUpdateModal;
