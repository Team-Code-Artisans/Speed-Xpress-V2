import LoginForm from "@/components/Login/LoginForm";
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="w-full sm:w-[30rem] mx-auto">
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
        <CardBody className="overflow-hidden space-y-2">
          <LoginForm />
          <div className="py-2">
            <p className="text-center text-small">
              <span>Don{"'"}t have an account? </span>
              <Link href="/register" className="text-primary font-medium">
                register
              </Link>
            </p>
            <p className="text-center text-small text-gray-500">or</p>
            <p className="text-center text-small">
              <span>Forgot your password? </span>
              <Link href="/password" className="text-primary font-medium">
                reset now
              </Link>
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
