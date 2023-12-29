"use client";

import { useAuth } from "@/hooks/useAuth";
import { RegisterFormType } from "@/types/FormTypes";
import CustomInput from "@/ui/CustomInput";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";
import SelectDistrict from "@/ui/SelectDistrict";
import SelectDivision from "@/ui/SelectDivision";
import SelectVehicles from "@/ui/SelectVehicles";
import { saveUser } from "@/utils/api/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

// icons
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const RiderForm = () => {
  const { googleSignIn, registerUser, loading } = useAuth();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [division, setDivision] = useState<string>("Dhaka");
  const [district, setDistrict] = useState<string>("Dhaka");
  const [vehicle, setVehicle] = useState<string>("Bike");

  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const handleForm = async (data: RegisterFormType) => {
    const { name, email, password, number, address } = data;
    const role = "rider";
    const riderData = {
      name,
      email,
      number,
      division,
      district,
      vehicle,
      address,
      role,
      photoURL: "",
    };

    const userCredential = await registerUser(email, password, name);

    if (userCredential !== null) {
      reset();
      await saveUser(riderData);
      router.push(`/dashboard/${role}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-4">
      <SecondaryButton
        type="button"
        fullWidth
        onClick={() => {
          googleSignIn("rider");
        }}
      >
        <FaGoogle /> Sign in with Google
      </SecondaryButton>
      <CustomInput
        label="Name"
        name="name"
        register={register}
        error={errors}
        validationRules={{
          required: "*name is required",
          pattern: { value: /^[A-Za-z ]+$/i, message: "*name is invalid" },
          minLength: { value: 2, message: "*name is invalid" },
          maxLength: { value: 20, message: "*name is invalid" },
        }}
      />
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
      <CustomInput
        label="Phone Number"
        name="number"
        register={register}
        error={errors}
        validationRules={{
          required: "*phone number is required",
          pattern: {
            value: /^[0-9]{11}$/,
            message: "invalid phone number",
          },
        }}
      />
      <SelectVehicles
        vehicle={vehicle}
        setVehicle={setVehicle}
        variant="bordered"
      />
      <div className="flex gap-4">
        <SelectDivision
          division={division}
          setDivision={setDivision}
          setDistrict={setDistrict}
          variant="bordered"
        />
        <SelectDistrict
          division={division}
          district={district}
          setDistrict={setDistrict}
          variant="bordered"
        />
      </div>
      <CustomInput
        label="Address"
        name="address"
        register={register}
        error={errors}
        validationRules={{
          required: "*address is required",
        }}
      />
      <PrimaryButton
        type="submit"
        fullWidth={true}
        isDisabled={loading}
        isLoading={loading}
      >
        Register Now Free
      </PrimaryButton>
    </form>
  );
};

export default RiderForm;
