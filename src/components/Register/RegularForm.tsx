"use client";

import PrimaryButton from "@/ui/PrimaryButton";
import SelectDistrict from "@/ui/SelectDistrict";
import SelectDivision from "@/ui/SelectDivision";
import { Input } from "@nextui-org/react";
import { useState } from "react";

// icons
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegularForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className="flex flex-col gap-4">
      <Input radius="sm" isRequired type="text" label="Name" />
      <Input
        radius="sm"
        isRequired
        type="email"
        label="Email"
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">@gmail.com</span>
          </div>
        }
      />
      <Input
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
      <Input radius="sm" isRequired type="text" label="Phone Number" />
      <div className="flex gap-4">
        <SelectDivision />
        <SelectDistrict />
      </div>
      <Input radius="sm" isRequired type="text" label="Address" />
      <PrimaryButton fullWidth={true}>Register Now Free</PrimaryButton>
    </form>
  );
};

export default RegularForm;
