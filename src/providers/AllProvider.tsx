import { ChildrenProps } from "@/types/ChildrenProps";
import AuthProvider from "./AuthProvider";
import Notification from "@/ui/Notification";
import AllStateProvider from "./AllStateProvider";
import QueryProvider from "./QueryProvider";

const AllProvider = ({ children }: ChildrenProps) => {
  return (
    <QueryProvider>
      <AuthProvider>
        <AllStateProvider>
          <Notification />
          {children}
        </AllStateProvider>
      </AuthProvider>
    </QueryProvider>
  );
};

export default AllProvider;
