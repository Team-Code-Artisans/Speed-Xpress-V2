import { ButtonProps } from "@/types/ButtonProps"
import { cn } from "@/utils/className"

const SecondaryButton = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-8 py-4 shadow-md rounded-md hover:bg-primary hover:text-light border border-primary transition duration-300 hover:scale-105 active:scale-95",
        className
      )}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
