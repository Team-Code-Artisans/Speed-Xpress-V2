"use client";

import CustomInput from "@/ui/CustomInput";
import PrimaryButton from "@/ui/PrimaryButton";
import { Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const handleForm = async (data: {
    fastName: string;
    lastName: string;
    email: string;
    description: string;
  }) => {
    // const response = await
    // if (response.success) {
    //   reset();
    // }

    toast.success("Your message is sent");
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className="space-y-6">
      <div className="-mx-2 md:items-center md:flex">
        <div className="flex-1 px-2">
          <CustomInput
            label="Fast Name"
            name="fastName"
            type="text"
            register={register}
            error={errors}
            validationRules={{
              required: "*name is required",
            }}
          />
        </div>

        <div className="flex-1 px-2 mt-4 md:mt-0">
          <CustomInput
            label="Last Name"
            name="lastName"
            type="text"
            register={register}
            error={errors}
          />
        </div>
      </div>

      <div className="mt-4">
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
      </div>

      <div className="w-full mt-4">
        <Textarea
          {...register("description", {
            required: "description is required",
          })}
          variant="bordered"
          minRows={5}
          radius="sm"
          label="Description"
          placeholder="Enter your description"
        />
      </div>

      <PrimaryButton fullWidth type="submit">
        Send Message
      </PrimaryButton>
    </form>
  );
};

export default ContactForm;
