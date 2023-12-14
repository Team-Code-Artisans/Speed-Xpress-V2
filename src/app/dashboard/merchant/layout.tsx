import { ChildrenProps } from "@/types/ChildrenProps";
import DashboardLayout from "../layout";

const MerchantDashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <DashboardLayout allowedRole="merchant">
      <div>{children}</div>
    </DashboardLayout>
  );
};

export default MerchantDashboardLayout;
