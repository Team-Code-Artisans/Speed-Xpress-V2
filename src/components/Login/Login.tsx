"use client";

import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="w-full sm:w-[30rem]">
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
            <span>Don{"'"}t have an account? </span>
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
