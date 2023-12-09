import { cn } from "@/utils/className"
import { ButtonProps } from "@nextui-org/react"

const PrimaryButton = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-8 py-4 shadow-md bg-primary text-light rounded-md transition duration-300 ease-in-out transform hover:bg-gradient-to-r from-primary to-secondary active:translate-y-1 active:translate-x-0",
        className
      )}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
