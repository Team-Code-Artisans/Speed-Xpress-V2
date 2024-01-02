"use client";

import PrimaryButton from "@/ui/PrimaryButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import CreateShopForm from "./CreateShopForm";

const CreateShopModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <PrimaryButton onClick={onOpen} size="md">
        Create New SHop
      </PrimaryButton>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h1 className="text-xl font-semibold">
                  CREATE
                  <span className="text-primary"> SHOP</span>
                </h1>
              </ModalHeader>
              <ModalBody>
                <CreateShopForm onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateShopModal;
