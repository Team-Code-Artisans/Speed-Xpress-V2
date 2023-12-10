import { ButtonProps } from "@/types/ButtonProps";
import { cn } from "@/utils/className";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Loading from "./Loading";

const PrimaryButton = ({
  children,
  className,
  href,
  isDisabled = false,
  isLoading = false,
  fullWidth = false,
  type = "button",
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} className="inline-block">
        <Button
          size="lg"
          radius="sm"
          color="primary"
          variant="solid"
          className={cn(
            "text-light hover:bg-gradient-to-r from-primary to-secondary",
            className
          )}
        >
          {children}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      isDisabled={isDisabled}
      isLoading={isLoading}
      spinner={<Loading />}
      size="lg"
      radius="sm"
      color="primary"
      variant="solid"
      type={type}
      fullWidth={fullWidth}
      className={cn(
        "text-light hover:bg-gradient-to-r from-primary to-secondary",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
