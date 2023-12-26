"use client";

import PrimaryButton from "@/ui/PrimaryButton";
import { useDisclosure } from "@nextui-org/react";
import ProfileUpdateModal from "./ProfileUpdateModal";

const UpdateProfileButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <PrimaryButton onClick={onOpen} size="md">
        Update Profile
      </PrimaryButton>

      <ProfileUpdateModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default UpdateProfileButton;
