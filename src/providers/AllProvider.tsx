import { ChildrenProps } from "@/types/ChildrenProps";
import Notification from "@/ui/Notification";
import AllStateProvider from "./AllStateProvider";
import AuthProvider from "./AuthProvider";
import QueryProvider from "./QueryProvider";

const AllProvider = ({ children }: ChildrenProps) => {
  return (
    <QueryProvider>
      <AuthProvider>
        <AllStateProvider>
          {children}
          <Notification />
        </AllStateProvider>
      </AuthProvider>
    </QueryProvider>
  );
};

export default AllProvider;
