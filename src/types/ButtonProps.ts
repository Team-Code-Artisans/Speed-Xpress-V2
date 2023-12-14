export type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  className?: string | string[];
  isLoading?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (...args: any[]) => void;
};
