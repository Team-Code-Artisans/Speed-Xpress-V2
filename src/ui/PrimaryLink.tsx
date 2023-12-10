import { ButtonProps } from "@/types/ButtonProps";
import { cn } from "@/utils/className";
import Link from "next/link";

const PrimaryLink = ({ children, className, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "px-8 py-4 shadow-md bg-primary text-light rounded-md hover:bg-gradient-to-r from-primary to-secondary transition duration-300 hover:scale-105 active:scale-95",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default PrimaryLink;
