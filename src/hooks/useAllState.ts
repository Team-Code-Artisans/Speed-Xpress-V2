import { AllStateContext } from "@/providers/AllStateProvider";
import { useContext } from "react";

export const useAllState = () => {
  const context = useContext(AllStateContext);

  if (!context) {
    throw new Error("useAllState must be used within an AllStateProvider");
  }

  return context;
};
