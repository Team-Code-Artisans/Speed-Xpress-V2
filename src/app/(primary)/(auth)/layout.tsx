"use client";

import { ChildrenProps } from "@/types/ChildrenProps";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AuthLayout = ({ children }: ChildrenProps) => {
  const pathname = usePathname();

  return (
    <div className="grid lg:grid-cols-2 max-w-screen-xl mx-auto px-6 lg:py-20 py-10 lg:place-items-center">
      <div className="hidden lg:block justify-self-start">
        {pathname === "/login" ? (
          <Image
            src={"/assets/images/login.png"}
            width={600}
            height={600}
            alt="login"
            className="w-[30rem]"
          />
        ) : (
          <Image
            src={"/assets/images/register.png"}
            width={1000}
            height={1000}
            alt="login"
            className="w-[35rem]"
          />
        )}
      </div>
      <div className="lg:justify-self-end">{children}</div>
    </div>
  );
};

export default AuthLayout;
