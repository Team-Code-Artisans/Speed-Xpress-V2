import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ChildrenProps } from "@/types/ChildrenProps";

const DashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <DashboardNavbar />
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
