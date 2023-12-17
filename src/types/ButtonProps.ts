export type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  className?: string | string[];
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "full" | "none";
  color?:
    | "primary"
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  isLoading?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (...args: any[]) => void;
};
