import { ChildrenProps } from "@/types/ChildrenProps";
import DashboardLayout from "../layout";

const UserDashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <DashboardLayout allowedRole="user">
      <div>{children}</div>
    </DashboardLayout>
  );
};

export default UserDashboardLayout;
