import { ChildrenProps } from "@/types/ChildrenProps";
import DashboardLayout from "../layout";

const AdminDashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <DashboardLayout allowedRole="admin">
      <div>{children}</div>
    </DashboardLayout>
  );
};

export default AdminDashboardLayout;
