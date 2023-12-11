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
          variant="ghost"
          onClick={onClick}
          type={type}
          fullWidth={fullWidth}
          className={cn("dark:text-light", className)}
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
      variant="ghost"
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      className={cn("dark:text-light", className)}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
