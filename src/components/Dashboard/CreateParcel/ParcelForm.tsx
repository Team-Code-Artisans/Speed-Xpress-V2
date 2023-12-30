import { weightData } from "@/data/deliveryData";
import { useAuth } from "@/hooks/useAuth";
import {
  ParcelDataType,
  ParcelFormProps,
  ParcelType,
  PaymentStatus,
  Status,
} from "@/types/ParcelType";
import CustomInput from "@/ui/CustomInput";
import CustomRadio from "@/ui/CustomRadio";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";
import SelectDistrict from "@/ui/SelectDistrict";
import SelectDivision from "@/ui/SelectDivision";
import { createParcel } from "@/utils/api/parcel";
import { createPayment } from "@/utils/api/payment";
import { RadioGroup, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ParcelForm = ({
  division,
  setDivision,
  shippingMethod,
  setShippingMethod,
  setWeight,
  estimatedTotal,
}: ParcelFormProps) => {
  const { userInfo, role } = useAuth();

  const [district, setDistrict] = useState<string>("Dhaka");
  const [paymentMethod, setPaymentMethod] = useState<string>("online");

  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const handleForm = async (data: ParcelDataType) => {
    const { address, email, name, number, quantity, weight, description } =
      data;
    const parcelStatus = Status.Pending;
    const paymentStatus = PaymentStatus.Pending;

    // All of the parcel data
    let parcelData: ParcelType = {
      senderInfo: {
        name: userInfo?.name || "",
        email: userInfo?.email || "",
        number: userInfo?.number || "",
        address: {
          division: userInfo?.division || "",
          district: userInfo?.district || "",
          address: userInfo?.address || "",
        },
      },
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
      parcelStatus,
      shippingMethod,
      parcelWeight: weight,
      parcelQuantity: quantity,
      deliveryDateTime: new Date().toLocaleString(), // const [date, time] = deliveryDateTime.split(', ')
      paymentInfo: {
        method: paymentMethod,
        status: paymentStatus,
        amount: estimatedTotal,
      },
      description,
    };

    if (role === "merchant") {
      parcelData = {
        ...parcelData,
        merchantInfo: {
          merchantId: userInfo?._id || "",
          ownerName: userInfo?.name || "",
          shopName: userInfo?.shopName || "",
          email: userInfo?.email || "",
          number: userInfo?.number || "",
          address: {
            division: userInfo?.division || "",
            district: userInfo?.district || "",
            address: userInfo?.address || "",
          },
        },
      };
    }

    const parcelResponse = await createParcel(parcelData);

    // Payment functionality
    if (parcelResponse.code === "success") {
      // Payment invoice data
      const paymentData = {
        userEmail: userInfo?.email || "",
        userName: userInfo?.name || "",
        userRole: userInfo?.role || "",
        parcelId: parcelResponse?.data.parcelId || "",
        paymentMethod,
        amount: estimatedTotal,
        status: paymentStatus,
        paymentDateTime: new Date().toLocaleString(),
      };

      // Payment API response
      if (paymentMethod === "online") {
        const paymentResponse = await createPayment(paymentData);

        if (paymentResponse.code === "success") {
          const url = paymentResponse.data.url;
          router.push(`${url}`);
        } else {
          console.error(paymentResponse.error);
        }
      } else {
        router.push(`/dashboard/${role}/parcels`);
        toast.success("Parcel created successfully");
      }
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className="space-y-4">
      {/* recipient details */}
      <h1 className="text-xl font-medium">Recipient Details</h1>
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

      {/* parcel details */}
      <h1 className="text-xl font-medium">Parcel Details</h1>

      <div className="grid sm:grid-cols-2 gap-4">
        <Select
          label={
            <p>
              Select total weight <span className="text-danger">*</span>
            </p>
          }
          {...register("weight", {
            required: "*weight is required",
          })}
          defaultSelectedKeys={"1"}
          isInvalid={errors?.weight ? true : false}
          errorMessage={errors?.weight && `${errors?.weight?.message}`}
          variant="bordered"
          radius="sm"
          name="weight"
          onChange={(e) => setWeight(e.target.value)}
        >
          {weightData.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
        <CustomInput
          label="Quantity"
          name="quantity"
          type="number"
          register={register}
          error={errors}
          validationRules={{
            required: "*quantity is required",
            pattern: {
              value: /^[1-9]\d*$/,
              message: "invalid quantity",
            },
          }}
        />
      </div>

      <RadioGroup
        label="Shipping Method"
        defaultValue="standard"
        value={shippingMethod}
        onValueChange={setShippingMethod}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <CustomRadio description="Regular shipping option" value="standard">
            Standard
          </CustomRadio>
          <CustomRadio description="Next day shipping option" value="express">
            Express
          </CustomRadio>
        </div>
      </RadioGroup>

      <RadioGroup
        label="Payment Method"
        defaultValue="online"
        value={paymentMethod}
        onValueChange={setPaymentMethod}
      >
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
        {...register("description")}
        radius="sm"
        variant="bordered"
        label="Description"
        placeholder="Enter parcel description"
      />

      <div className="flex gap-4 justify-end">
        <SecondaryButton
          href={`/dashboard/${role}/parcels`}
          type="button"
          fullWidth={true}
        >
          Cancel
        </SecondaryButton>
        <PrimaryButton
          type="submit"
          fullWidth={true}
          isDisabled={!userInfo?.address ? true : false}
        >
          Submit
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ParcelForm;
