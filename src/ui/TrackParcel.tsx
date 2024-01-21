"use client";

import { ParcelType } from "@/types/ParcelType";
import { getSingleParcel } from "@/utils/api/parcel";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import TrackingModal from "./TrackingModal";

const TrackParcel = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [parcel, setParcel] = useState<ParcelType | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ id: string }>();

  const handleParcel = async (data: { id: string }) => {
    const response = await getSingleParcel(data.id);

    if (response.code === "success" && response.data !== null) {
      setParcel(response.data);
      onOpen();
    } else {
      setParcel(null);
      toast.error("Invalid Parcel ID");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleParcel)}
        className="flex items-center justify-center sm:max-w-sm"
      >
        <input
          {...register("id", {
            required: "*Parcel ID is required",
            pattern: {
              value: /^SX[A-Z0-9]{6}$/,
              message: "*Invalid Parcel ID",
            },
          })}
          className={`p-4 border border-r-0 border-solid rounded-l-md bg-transparent focus:outline-none w-full ${
            errors.id ? "border-danger" : "border-primary"
          }`}
          placeholder="Parcel ID Here"
          type="text"
          name="id"
          id="id"
        />
        <button
          type="submit"
          className="px-4 max-sm:text-sm py-[19px] sm:py-[17px] border-solid rounded-r-md bg-primary text-light cursor-pointer transition duration-300 ease-in-out hover:bg-gradient-to-r from-primary to-secondary focus:outline-none whitespace-nowrap"
        >
          Track Parcel
        </button>
      </form>

      <TrackingModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        parcel={parcel}
      />
    </>
  );
};

export default TrackParcel;
