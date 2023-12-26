import { ModalDisclosureType } from "@/types/ModalDisclosureType";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import ProfileForm from "./ProfileForm";

const ProfileUpdateModal = ({ onOpenChange, isOpen }: ModalDisclosureType) => {
  return (
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
  );
};

export default ProfileUpdateModal;
