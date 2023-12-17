import { ChildrenProps } from "@/types/ChildrenProps";
import DashboardLayout from "../layout";
import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";

const AdminDashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <DashboardLayout allowedRole="admin">
      <div>
        <DashboardNavbar />
        {children}
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboardLayout;
