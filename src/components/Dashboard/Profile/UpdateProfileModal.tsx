"use client";

import PrimaryButton from "@/ui/PrimaryButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import ProfileForm from "./ProfileForm";

const UpdateProfileModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <PrimaryButton onClick={onOpen} size="md">
        Update Profile
      </PrimaryButton>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h1 className="text-xl font-semibold">
                  UPDATE
                  <span className="text-primary"> PROFILE</span>
                </h1>
              </ModalHeader>
              <ModalBody>
                <ProfileForm onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProfileModal;
