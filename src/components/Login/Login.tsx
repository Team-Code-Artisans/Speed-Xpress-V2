"use client";

import { Card, CardBody } from "@nextui-org/react";
import LoginForm from "./LoginForm";
import Link from "next/link";

const Login = () => {
  return (
    <div className="w-full sm:w-[25rem]">
      <Card
        radius="sm"
        className="divide-y divide-gray-200 dark:divide-gray-800"
      >
        <Link
          href={"/"}
          className="font-bold text-inherit text-xl select-none text-center py-4"
        >
          SPEED<span className="text-primary">XPRESS</span>
        </Link>
        <CardBody className="overflow-hidden">
          <LoginForm />
          <p className="text-center text-small py-2">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-medium">
              register
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
