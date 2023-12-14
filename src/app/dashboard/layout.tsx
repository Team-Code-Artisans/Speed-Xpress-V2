import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import { PrivateRouteType } from "@/types/PrivateRouteType";

const DashboardLayout = ({ children, allowedRole }: PrivateRouteType) => {
  return <PrivateRoute allowedRole={allowedRole}>{children}</PrivateRoute>;
};

export default DashboardLayout;
