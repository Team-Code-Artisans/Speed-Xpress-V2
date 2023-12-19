"use client";

import { useAuth } from "@/hooks/useAuth";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";
import SelectDistrict from "@/ui/SelectDistrict";
import SelectDivision from "@/ui/SelectDivision";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

// icons
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const ParcelForm = () => {
  const { googleSignIn, registerUser, loading } = useAuth();

  const [division, setDivision] = useState<string>("Dhaka");
  const [district, setDistrict] = useState<string>("Dhaka");

  const router = useRouter();

  const { register, reset, handleSubmit } = useForm<any>();

  const handleForm = async (data: any) => {
    console.log(data);
    // const parcelResponse = await registerUser(parcelData);
    // if (parcelResponse) {
    //   reset();
    //   router.push(`/dashboard/${role}`);
    //   toast.success("Register successfully");
    // }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-4">
      <Input
        variant="bordered"
        {...register("name")}
        radius="sm"
        type="text"
        isRequired
        label="Name"
      />
      <Input
        variant="bordered"
        {...register("email")}
        radius="sm"
        isRequired
        type="email"
        label="Email"
      />
      <Input
        variant="bordered"
        {...register("number")}
        radius="sm"
        isRequired
        type="text"
        label="Phone Number"
      />
      <div className="flex gap-4">
        <SelectDivision
          division={division}
          setDivision={setDivision}
          variant="bordered"
        />
        <SelectDistrict
          district={district}
          setDistrict={setDistrict}
          variant="bordered"
        />
      </div>
      <Input
        variant="bordered"
        {...register("address")}
        radius="sm"
        isRequired
        type="text"
        label="Address"
      />
      <div className="flex gap-4 justify-end">
        <SecondaryButton
          type="button"
          fullWidth={true}
          isDisabled={loading}
          isLoading={loading}
        >
          Cancel
        </SecondaryButton>
        <PrimaryButton
          type="submit"
          fullWidth={true}
          isDisabled={loading}
          isLoading={loading}
        >
          Submit
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ParcelForm;
