"use client";

import { useState } from "react";
import { Tabs, Tab, Link, Card, CardBody } from "@nextui-org/react";
import RegularForm from "./RegularForm";
import MerchantForm from "./MerchantForm";
import RiderForm from "./RiderForm";

const Register = () => {
  const [selected, setSelected] = useState("Regular");

  return (
    <div className="flex flex-col w-full">
      <Card radius="sm" className="max-w-full w-[30rem] max-h-min">
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
            <Link size="sm" href="/login">
              Login
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
