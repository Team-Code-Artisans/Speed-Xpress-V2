"use client";

import { AuthContext } from "@/providers/AuthProvider";
import { RegisterFormType } from "@/types/FormTypes";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";
import SelectDistrict from "@/ui/SelectDistrict";
import SelectDivision from "@/ui/SelectDivision";
import { saveUser } from "@/utils/api/user";
import { Input } from "@nextui-org/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

// icons
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const RegularForm = () => {
  const { googleSignIn, registerUser } = useContext(AuthContext);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [division, setDivision] = useState<string>("Dhaka");
  const [district, setDistrict] = useState<string>("Dhaka");

  const { register, reset, handleSubmit } = useForm<RegisterFormType>();

  const handleForm = async (data: RegisterFormType) => {
    const { name, email, password, number, address } = data;
    const regularData = {
      name,
      email,
      number,
      division,
      district,
      address,
      photoURL: "",
      role: "regular",
    };

    const userCredential = await registerUser(email, password, name);

    if (userCredential !== null) {
      reset();
      await saveUser(regularData);
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
        {...register("name")}
        radius="sm"
        type="text"
        isRequired
        label="Name"
      />
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
      <Input
        {...register("number")}
        radius="sm"
        isRequired
        type="text"
        label="Phone Number"
      />
      <div className="flex gap-4">
        <SelectDivision division={division} setDivision={setDivision} />
        <SelectDistrict district={district} setDistrict={setDistrict} />
      </div>
      <Input
        {...register("address")}
        radius="sm"
        isRequired
        type="text"
        label="Address"
      />
      <PrimaryButton type="submit" fullWidth={true}>
        Register Now Free
      </PrimaryButton>
    </form>
  );
};

export default RegularForm;
