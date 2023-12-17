import { ChildrenProps } from "@/types/ChildrenProps";
import DashboardLayout from "../layout";
import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";

const RegularDashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <DashboardLayout allowedRole="regular">
      <div>
        <DashboardNavbar />
        {children}
      </div>
    </DashboardLayout>
  );
};

export default RegularDashboardLayout;
