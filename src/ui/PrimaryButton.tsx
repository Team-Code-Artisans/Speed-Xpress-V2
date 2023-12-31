import { ButtonProps } from "@/types/ButtonProps";
import { Button, cn } from "@nextui-org/react";
import Link from "next/link";
import Loading from "./Loading";

const PrimaryButton = ({
  children,
  className,
  href,
  onClick,
  size = "lg",
  radius = "sm",
  color = "primary",
  variant = "solid",
  isDisabled = false,
  isLoading = false,
  fullWidth = false,
  type = "button",
}: ButtonProps) => {
  return (
    <div>
      <Button
        as={href ? Link : "button"}
        href={href}
        isDisabled={isDisabled}
        isLoading={isLoading}
        spinner={<Loading size="sm" />}
        size={size}
        radius={radius}
        color={color}
        variant={variant}
        onClick={onClick}
        type={type}
        fullWidth={fullWidth}
        className={cn(
          "text-light hover:bg-gradient-to-r from-primary to-secondary",
          className
        )}
      >
        {children}
      </Button>
    </div>
  );
};

export default PrimaryButton;
