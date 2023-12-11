import { ChildrenProps } from "@/types/ChildrenProps";
import AuthProvider from "./AuthProvider";
import Notification from "@/ui/Notification";
import AllStateProvider from "./AllStateProvider";

const AllProvider = ({ children }: ChildrenProps) => {
  return (
    <AuthProvider>
      <AllStateProvider>
        <Notification />
        {children}
      </AllStateProvider>
    </AuthProvider>
  );
};

export default AllProvider;
