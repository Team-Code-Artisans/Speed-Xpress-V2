import { ChildrenProps } from "@/types/ChildrenProps";
import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";

const RiderDashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default RiderDashboardLayout;
