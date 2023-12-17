import { ChildrenProps } from "@/types/ChildrenProps";
import DashboardLayout from "../layout";

const RegularDashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <DashboardLayout allowedRole="regular">
      <div>{children}</div>
    </DashboardLayout>
  );
};

export default RegularDashboardLayout;
