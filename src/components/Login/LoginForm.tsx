"use client";

import { AuthContext } from "@/providers/AuthProvider";
import { RegisterFormType } from "@/types/FormTypes";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";
import { Input } from "@nextui-org/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

// icons
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const { googleSignIn, loginUser } = useContext(AuthContext);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const { register, reset, handleSubmit } = useForm<RegisterFormType>();

  const handleForm = async (data: { email: string; password: string }) => {
    const { email, password } = data;

    const userCredential = await loginUser(email, password);
    if (userCredential !== null) {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-4">
      <SecondaryButton
        type="button"
        onClick={() => {
          googleSignIn("regular");
        }}
      >
        <FaGoogle /> Sign in with Google
      </SecondaryButton>
      <Input
        {...register("email")}
        radius="sm"
        isRequired
        type="email"
        label="Email"
      />
      <Input
        {...register("password")}
        radius="sm"
        isRequired
        label="Password"
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
      />
      <PrimaryButton type="submit" fullWidth={true}>
        Login Now
      </PrimaryButton>
    </form>
  );
};

export default LoginForm;
