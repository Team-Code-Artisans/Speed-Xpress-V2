"use client";

import { weightData } from "@/data/deliveryData";
import { useAuth } from "@/hooks/useAuth";
import CustomRadio from "@/ui/CustomRadio";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";
import SelectDistrict from "@/ui/SelectDistrict";
import SelectDivision from "@/ui/SelectDivision";
import {
  Input,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

// icons
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";
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
    <form onSubmit={handleSubmit(handleForm)} className="space-y-4">
      {/* recipient details */}
      <h1 className="text-xl font-medium">Recipient Details</h1>
      <Input
        {...register("name")}
        variant="bordered"
        radius="sm"
        type="text"
        isRequired
        label="Name"
      />
      <Input
        {...register("email")}
        variant="bordered"
        radius="sm"
        isRequired
        type="email"
        label="Email"
      />
      <Input
        {...register("number")}
        variant="bordered"
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
        {...register("address")}
        variant="bordered"
        radius="sm"
        isRequired
        type="text"
        label="Address"
      />

      {/* parcel details */}
      <h1 className="text-xl font-medium">Parcel Details</h1>

      <div className="grid sm:grid-cols-2 gap-4">
        <Select
          isRequired
          label="Select total weight"
          variant="bordered"
          radius="sm"
        >
          {weightData.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
        <Input
          radius="sm"
          isRequired
          variant="bordered"
          type="number"
          label="Quantity"
        />
      </div>

      <RadioGroup label="Delivery Option" defaultValue="standard">
        <div className="grid sm:grid-cols-2 gap-4">
          <CustomRadio description="Regular delivery option" value="standard">
            Standard
          </CustomRadio>
          <CustomRadio description="Next day delivery option" value="express">
            Express
          </CustomRadio>
        </div>
      </RadioGroup>

      <RadioGroup label="Payment Method" defaultValue="online">
        <div className="grid sm:grid-cols-2 gap-4">
          <CustomRadio description="Stripe payment option" value="online">
            Online Payment
          </CustomRadio>
          <CustomRadio description="Cash on delivery option" value="cash">
            Cash On Delivery
          </CustomRadio>
        </div>
      </RadioGroup>

      <Textarea
        radius="sm"
        variant="bordered"
        label="Description"
        placeholder="Enter parcel description"
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
