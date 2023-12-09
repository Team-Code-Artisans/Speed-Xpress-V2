import { ButtonProps } from "@/types/ButtonProps"
import { cn } from "@/utils/className"

const SecondaryButton = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-8 py-4 shadow-md rounded-md transition duration-300 ease-in-out transform hover:bg-primary hover:text-light border border-primary active:translate-y-1 active:translate-x-0",
        className
      )}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
