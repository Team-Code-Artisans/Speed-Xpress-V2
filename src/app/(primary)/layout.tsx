import MainNavbar from "@/components/Navbar/Navbar"
import { PropsWithChildren } from "react"

const PrimaryLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <MainNavbar />
      {children}
    </div>
  )
}

export default PrimaryLayout
