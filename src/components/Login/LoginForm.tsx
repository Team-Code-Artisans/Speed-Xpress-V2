"use client";

import { useAuth } from "@/hooks/useAuth";
import CustomInput from "@/ui/CustomInput";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

// icons
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { googleSignIn, loginUser } = useAuth();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const handleForm = async (data: { email: string; password: string }) => {
    const { email, password } = data;

    const userCredential = loginUser(email, password);

    if (userCredential !== null) {
      reset();
      router.push(`/dashboard`);
      toast.success("Sign in successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-4">
      <SecondaryButton
        type="button"
        fullWidth
        onClick={() => {
          googleSignIn();
        }}
      >
        <FaGoogle /> Sign in with Google
      </SecondaryButton>
      <CustomInput
        label="Email"
        name="email"
        type="email"
        register={register}
        error={errors}
        validationRules={{
          required: "*email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "*invalid email address",
          },
        }}
      />
      <CustomInput
        label="Password"
        name="password"
        register={register}
        error={errors}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <FaEye className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        validationRules={{
          required: "*password is required",
          minLength: { value: 6, message: "*password must be 6 characters" },
        }}
      />
      <PrimaryButton type="submit" fullWidth={true}>
        Login Now
      </PrimaryButton>
    </form>
  );
};

export default LoginForm;
