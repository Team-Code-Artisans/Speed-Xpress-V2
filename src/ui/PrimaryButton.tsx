import { ButtonProps } from "@/types/ButtonProps"
import { cn } from "@/utils/className"

const PrimaryButton = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-8 py-4 shadow-md bg-primary text-light rounded-md hover:bg-gradient-to-r from-primary to-secondary transition duration-300 hover:scale-105 active:scale-95",
        className
      )}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
