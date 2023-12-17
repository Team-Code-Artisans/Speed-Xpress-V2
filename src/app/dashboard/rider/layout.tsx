import { ChildrenProps } from "@/types/ChildrenProps";
import DashboardLayout from "../layout";
import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";

const RiderDashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <DashboardLayout allowedRole="rider">
      <div>
        <DashboardNavbar />
        {children}
      </div>
    </DashboardLayout>
  );
};

export default RiderDashboardLayout;
