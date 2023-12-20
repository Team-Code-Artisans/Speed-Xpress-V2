import { ChildrenProps } from "@/types/ChildrenProps";
import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";

const RegularDashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default RegularDashboardLayout;
