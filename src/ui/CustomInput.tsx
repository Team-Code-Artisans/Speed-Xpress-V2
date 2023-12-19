import { Input } from "@nextui-org/react";
import {
  FieldValues,
  UseFormRegister,
  DeepMap,
  FieldError,
} from "react-hook-form";

type CustomInputProps = {
  label: React.ReactNode;
  name: string;
  register: UseFormRegister<FieldValues>;
  error?: DeepMap<FieldValues, FieldError>;
  variant?: "bordered" | "flat" | "faded";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  type?: string;
  validationRules?: Record<string, any>;
};

const CustomInput = ({
  label,
  name,
  register,
  error,
  variant = "bordered",
  radius = "sm",
  type = "text",
  validationRules = {},
}: CustomInputProps) => {
  const isRequired = validationRules.required;
  return (
    <Input
      {...register(name, validationRules)}
      label={
        <p>
          {label}
          {isRequired && <span className="text-danger">*</span>}
        </p>
      }
      variant={variant}
      radius={radius}
      type={type}
      isInvalid={error?.[name] ? true : false}
      errorMessage={error?.[name] && `${error[name]?.message}`}
    />
  );
};

export default CustomInput;
