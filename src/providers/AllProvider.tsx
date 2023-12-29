import { ChildrenProps } from "@/types/ChildrenProps";
import Notification from "@/ui/Notification";
import AllStateProvider from "./AllStateProvider";
import AuthProvider from "./AuthProvider";
import QueryProvider from "./QueryProvider";
import StripeProvider from "./StripeProvider";

const AllProvider = ({ children }: ChildrenProps) => {
  return (
    <QueryProvider>
      <AuthProvider>
        <AllStateProvider>
          <StripeProvider>{children}</StripeProvider>
          <Notification />
        </AllStateProvider>
      </AuthProvider>
    </QueryProvider>
  );
};

export default AllProvider;
