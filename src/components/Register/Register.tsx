"use client";

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import MerchantForm from "./MerchantForm";
import RegularForm from "./RegularForm";
import RiderForm from "./RiderForm";

const Register = () => {
  const [selected, setSelected] = useState("Regular");

  return (
    <div className="w-full sm:w-[30rem]">
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
            <Tab key="Regular" title="Regular">
              <RegularForm />
            </Tab>
            <Tab key="Merchant" title="Merchant">
              <MerchantForm />
            </Tab>
            <Tab key="Rider" title="Rider">
              <RiderForm />
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
