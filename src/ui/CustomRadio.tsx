import React from "react";
import { Radio, cn, RadioProps } from "@nextui-org/react";

const CustomRadio = (props: RadioProps) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "hover:opacity-70 active:opacity-50 tap-highlight-transparent",
          "max-w-full m-0 gap-1 px-4 cursor-pointer border-2 border-default rounded-lg",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

export default CustomRadio;
