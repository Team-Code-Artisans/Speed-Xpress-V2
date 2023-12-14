"use client";

import { useAuthContext } from "@/hooks/useAuthContext";
import { ChildrenProps } from "@/types/ChildrenProps";
import Loading from "@/ui/Loading";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: ChildrenProps) => {
  const { user } = useAuthContext();
  const router = useRouter();

  if (user === null) {
    return <Loading size="lg" />;
  }

  if (!user) {
    router.replace("/login");
    return null;
  }

  return <div>{children}</div>;
};

export default DashboardLayout;
