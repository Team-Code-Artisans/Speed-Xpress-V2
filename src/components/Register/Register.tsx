"use client";

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState<string>(
    pathname === "/admin" ? "admin" : "regular"
  );

  return (
    <div className="w-full sm:w-[30rem] mx-auto">
      <Card radius="sm">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            radius="sm"
            aria-label="Tabs form"
            selectedKey={selected}
            color="primary"
            // @ts-ignore
            onSelectionChange={setSelected}
            className="py-2"
          >
            {pathname === "/admin" && (
              <Tab key="admin" title="Admin">
                <RegisterForm role={selected} />
              </Tab>
            )}

            <Tab key="regular" title="Regular">
              <RegisterForm role={selected} />
            </Tab>
            <Tab key="merchant" title="Merchant">
              <RegisterForm role={selected} />
            </Tab>
            <Tab key="rider" title="Rider">
              <RegisterForm role={selected} />
            </Tab>
          </Tabs>
          <p className="text-center text-small py-2">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium">
              Login
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
