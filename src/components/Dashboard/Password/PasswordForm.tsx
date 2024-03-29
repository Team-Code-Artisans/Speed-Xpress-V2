"use client";

import { useAuth } from "@/hooks/useAuth";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const PasswordForm = () => {
  const { user, resetPassword } = useAuth();
  const router = useRouter();

  const handleForm = async () => {
    resetPassword(`${user?.email}`);
    toast.info("Please check your mail");
  };

  return (
    <div className="flex flex-col gap-4 justify-between h-[10rem]">
      <Input
        type="email"
        name="email"
        id="email"
        label="Email"
        variant="bordered"
        radius="sm"
        readOnly
        value={`${user?.email}`}
        description="Click reset and check your mail"
        className="max-w-xs"
      />
      <div className="flex gap-4">
        <SecondaryButton size="md" onClick={() => router.back()}>
          Back
        </SecondaryButton>
        <PrimaryButton size="md" onClick={handleForm}>
          Reset Now
        </PrimaryButton>
      </div>
    </div>
  );
};

export default PasswordForm;
