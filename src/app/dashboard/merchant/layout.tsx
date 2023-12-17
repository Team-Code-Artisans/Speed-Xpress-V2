import { ChildrenProps } from "@/types/ChildrenProps";
import DashboardLayout from "../layout";
import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";

const MerchantDashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <DashboardLayout allowedRole="merchant">
      <div>
        <DashboardNavbar />
        {children}
      </div>
    </DashboardLayout>
  );
};

export default MerchantDashboardLayout;
