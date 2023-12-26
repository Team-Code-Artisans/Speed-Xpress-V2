import { ModalDisclosureType } from "@/types/ModalDisclosureType";
import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import Link from "next/link";

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
              <Input
                autoFocus
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
              />
              <div className="flex py-2 px-1 justify-between">
                <Checkbox
                  classNames={{
                    label: "text-small",
                  }}
                >
                  Remember me
                </Checkbox>
                <Link href="#">Forgot password?</Link>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Sign in
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProfileUpdateModal;
