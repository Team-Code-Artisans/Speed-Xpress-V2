import { ButtonProps } from "@/types/ButtonProps";
import { cn } from "@/utils/className";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Loading from "./Loading";

const SecondaryButton = ({
  children,
  className,
  href,
  onClick,
  size = "lg",
  radius = "sm",
  color = "primary",
  variant = "ghost",
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
        spinner={<Loading />}
        size={size}
        radius={radius}
        color={color}
        variant={variant}
        onClick={onClick}
        type={type}
        fullWidth={fullWidth}
        className={cn("dark:text-light", className)}
      >
        {children}
      </Button>
    </div>
  );
};

export default SecondaryButton;
