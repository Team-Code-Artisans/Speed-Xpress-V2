import { ParcelFormProps, ParcelFormType } from "@/types/FormTypes";
import { ParcelType } from "@/types/ParcelType";
import CustomInput from "@/ui/CustomInput";
import Loading from "@/ui/Loading";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";
import SelectDistrict from "@/ui/SelectDistrict";
import SelectDivision from "@/ui/SelectDivision";
import { getSingleParcel, updateParcel } from "@/utils/api/parcel";
import { Textarea } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UpdateParcelForm = ({ onClose, id, refetchAll }: ParcelFormProps) => {
  // Get single parcel by id
  const {
    data: singleParcel = {} as ParcelType,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["SingleParcel"],
    queryFn: async () => {
      const parcelResponse = await getSingleParcel(`${id}`);
      if (parcelResponse.code === "success") {
        return parcelResponse.data;
      } else {
        console.error(parcelResponse.error);
      }
    },
  });

  const [division, setDivision] = useState<string>("");
  const [district, setDistrict] = useState<string>("");

  useEffect(() => {
    if (singleParcel && singleParcel.recipientInfo) {
      setDivision(singleParcel.recipientInfo.address?.division || "");
      setDistrict(singleParcel.recipientInfo.address?.district || "");
    }
  }, [singleParcel]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const handleForm = async (data: ParcelFormType) => {
    const { address, description, email, name, number } = data;
    const parcelData = {
      recipientInfo: {
        name,
        email,
        number,
        address: {
          division,
          district,
          address,
        },
      },
      description,
    };

    const params = {
      id: `${singleParcel?._id}`,
      data: parcelData,
    };

    const parcelResponse = await updateParcel(params);
    console.log("parcelResponse:", parcelResponse);

    if (parcelResponse.code === "success") {
      refetchAll();
      refetch();
      onClose();
    } else {
      console.error(parcelResponse.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className="space-y-4">
      {/* recipient details */}
      <h1 className="text-xl font-medium">Recipient Details</h1>
      {isLoading ? (
        <div className="grid place-items-center py-20">
          <Loading size="lg" />
        </div>
      ) : (
        <>
          <CustomInput
            label="Name"
            name="name"
            defaultValue={`${singleParcel?.recipientInfo?.name || ""}`}
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
            defaultValue={`${singleParcel?.recipientInfo?.email || ""}`}
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
            label="Phone Number"
            name="number"
            defaultValue={`${singleParcel?.recipientInfo?.number || ""}`}
            register={register}
            error={errors}
            validationRules={{
              required: "*phone number is required",
              pattern: {
                value: /^[0-9+\\-]+$/,
                message: "invalid phone number",
              },
              minLength: { value: 7, message: "*invalid phone number" },
              maxLength: { value: 15, message: "*invalid phone number" },
            }}
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
            defaultValue={`${
              singleParcel?.recipientInfo?.address?.address || ""
            }`}
            register={register}
            error={errors}
            validationRules={{
              required: "*address is required",
            }}
          />

          <Textarea
            {...register("description")}
            defaultValue={`${singleParcel?.description || ""}`}
            radius="sm"
            variant="bordered"
            label="Description"
            placeholder="Enter parcel description"
          />
        </>
      )}

      <div className="flex gap-4 justify-end">
        <SecondaryButton type="button" fullWidth onClick={onClose}>
          Cancel
        </SecondaryButton>
        <PrimaryButton type="submit" fullWidth>
          Submit
        </PrimaryButton>
      </div>
    </form>
  );
};

export default UpdateParcelForm;
