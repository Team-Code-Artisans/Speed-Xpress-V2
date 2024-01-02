"use client";

import { UpdateShopPropsType } from "@/types/ShopType";
import PrimaryButton from "@/ui/PrimaryButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import UpdateShopForm from "./UpdateShopForm";

const UpdateShopModal = ({ id, refetch, shop }: UpdateShopPropsType) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <PrimaryButton onClick={onOpen} size="sm">
        Update Shop
      </PrimaryButton>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h1 className="text-xl font-semibold">
                  Update
                  <span className="text-primary"> SHOP</span>
                </h1>
              </ModalHeader>
              <ModalBody>
                <UpdateShopForm
                  onClose={onClose}
                  id={id}
                  refetch={refetch}
                  shop={shop}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateShopModal;
