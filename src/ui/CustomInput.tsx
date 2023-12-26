import { CustomInputProps } from "@/types/InputType";
import { Input } from "@nextui-org/react";

const CustomInput = ({
  label,
  name,
  register,
  error,
  defaultValue,
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
      defaultValue={defaultValue}
      variant={variant}
      radius={radius}
      type={type}
      isInvalid={error?.[name] ? true : false}
      errorMessage={error?.[name] && `${error[name]?.message}`}
    />
  );
};

export default CustomInput;
