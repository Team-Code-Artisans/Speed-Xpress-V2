import { ChildrenProps } from "@/types/ChildrenProps"

const AuthLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="grid grid-cols-2 max-w-screen-xl mx-auto px-4 py-20">
      <div />
      <div className="justify-self-end">{children}</div>
    </div>
  )
}

export default AuthLayout
