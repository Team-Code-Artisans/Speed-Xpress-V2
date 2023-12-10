"use client";

import { RegisterFormType } from "@/types/FormTypes";
import PrimaryButton from "@/ui/PrimaryButton";
import SelectDistrict from "@/ui/SelectDistrict";
import SelectDivision from "@/ui/SelectDivision";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

// icons
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegularForm = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [division, setDivision] = useState<string>("Dhaka");
  const [district, setDistrict] = useState<string>("Dhaka");

  const { register, reset, handleSubmit } = useForm<RegisterFormType>();

  const handleForm = (data: RegisterFormType) => {
    const regularData = {
      ...data,
      division,
      district,
    };
    console.log(regularData);
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-4">
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