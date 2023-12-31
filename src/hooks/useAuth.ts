"use client";

import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

let logOutFunction: () => void;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  logOutFunction = context.logOut;

  return context;
};

export const getLogOutFunction = () => logOutFunction;
