import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

export type CustomInputProps = {
  label: React.ReactNode;
  name: string;
  register: UseFormRegister<FieldValues>;
  error?: DeepMap<FieldValues, FieldError>;
  variant?: "bordered" | "flat" | "faded";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  type?: string;
  validationRules?: Record<string, any>;
  defaultValue?: string;
};
