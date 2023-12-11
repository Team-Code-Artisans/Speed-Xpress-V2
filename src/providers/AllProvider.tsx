import { ChildrenProps } from "@/types/ChildrenProps";
import AuthProvider from "./AuthProvider";

const AllProvider = ({ children }: ChildrenProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AllProvider;
