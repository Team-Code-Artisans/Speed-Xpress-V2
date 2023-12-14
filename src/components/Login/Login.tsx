"use client";

import { Link, Card, CardBody } from "@nextui-org/react";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="w-full sm:w-[25rem]">
      <Card radius="sm">
        <CardBody className="overflow-hidden">
          <LoginForm />
          <p className="text-center text-small py-2">
            Don't have an account?{" "}
            <Link size="sm" href="/register">
              register
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
