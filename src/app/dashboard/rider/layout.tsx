import { ChildrenProps } from "@/types/ChildrenProps";
import DashboardLayout from "../layout";

const RiderDashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <DashboardLayout allowedRole="rider">
      <div>{children}</div>
    </DashboardLayout>
  );
};

export default RiderDashboardLayout;
