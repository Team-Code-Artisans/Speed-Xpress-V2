"use client";

import { ParcelContext } from "@/providers/ParcelProvider";
import { useContext } from "react";

export const useParcel = () => {
  const context = useContext(ParcelContext);

  if (!context) {
    throw new Error("useParcel must be used within an ParcelProvider");
  }

  return context;
};
