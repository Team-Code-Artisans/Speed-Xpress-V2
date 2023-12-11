"use client";

import { AllStateType } from "@/types/AllStateType";
import { ChildrenProps } from "@/types/ChildrenProps";
import { createContext, useState } from "react";

export const AllStateContext = createContext<AllStateType>({} as AllStateType);

const AllStateProvider = ({ children }: ChildrenProps) => {
  const [localTheme, setLocalTheme] = useState<"dark" | "light">("dark");

  const value: AllStateType = {
    localTheme,
    setLocalTheme,
  };

  return (
    <AllStateContext.Provider value={value}>
      {children}
    </AllStateContext.Provider>
  );
};

export default AllStateProvider;
