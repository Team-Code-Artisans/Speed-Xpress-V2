"use client";

import { useAuth } from "@/hooks/useAuth";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PasswordForm = () => {
  const [email, setEmail] = useState("");

  const { user, resetPassword } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  const handleForm = async () => {
    if (email.includes("@")) {
      resetPassword(`${email}`);
      toast.info("Please check your mail");
    } else {
      toast.error("Invalid email");
    }
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
        readOnly={user?.email ? true : false}
        value={`${email}`}
        onChange={(e) => setEmail(e.target.value)}
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
