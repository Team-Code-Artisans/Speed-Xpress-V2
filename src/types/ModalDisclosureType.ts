import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { ParcelType } from "./ParcelType";

export type ModalDisclosureType = {
  isOpen: boolean;
  onOpenChange: () => void;
  id?: string | null;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<ParcelType[], Error>>;
};
