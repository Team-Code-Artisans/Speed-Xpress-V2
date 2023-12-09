import Footer from "@/components/Footer/Footer"
import MainNavbar from "@/components/Navbar/Navbar"
import { ChildrenProps } from "@/types/ChildrenProps"

const PrimaryLayout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <MainNavbar />
      {children}
      <Footer />
    </div>
  )
}

export default PrimaryLayout
