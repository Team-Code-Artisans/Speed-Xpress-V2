import { useAuth } from "@/hooks/useAuth";
import { ProfileFormProps, ProfileFormType } from "@/types/FormTypes";
import CustomInput from "@/ui/CustomInput";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";
import SelectDistrict from "@/ui/SelectDistrict";
import SelectDivision from "@/ui/SelectDivision";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ProfileForm = ({ onClose }: ProfileFormProps) => {
  const { userInfo } = useAuth();

  const [division, setDivision] = useState<string>(`${userInfo?.division}`);
  const [district, setDistrict] = useState<string>(`${userInfo?.district}`);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const handleForm = (data: ProfileFormType) => {
    const profileData = {
      ...data,
      division,
      district,
    };

    console.log(profileData);
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className="space-y-4 py-4">
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
      <CustomInput
        label="Address"
        name="address"
        register={register}
        error={errors}
        validationRules={{
          required: "*address is required",
        }}
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
      <div className="flex gap-4 justify-end">
        <SecondaryButton type="button" size="md" onClick={onClose}>
          Close
        </SecondaryButton>
        <PrimaryButton type="submit" size="md" onClick={onClose}>
          Sign in
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ProfileForm;
