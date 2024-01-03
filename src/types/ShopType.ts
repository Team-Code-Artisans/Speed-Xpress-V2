import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

type Address = {
  division: string;
  district: string;
  address: string;
};

export type ShopType = {
  name: string;
  email: string;
  number: string;
  address: Address;
  merchantId: string;
  merchantEmail: string;
};

export type UpdateShopType = Omit<ShopType, "merchantId" | "merchantEmail">;

export type UpdateShopRequestType = {
  id: string;
  data: UpdateShopType;
};

export type ShopRequestType = {
  id: string;
  data: ShopType;
};

export type ShopResponseType = {
  _id: string;
  shopId: string;
} & ShopType;

export type ShopFormType = {
  name: string;
  email: string;
  number: string;
  address: string;
};

export type ShopModalPropsType = {
  shop: ShopType;
  onClose: () => void;
  id: string;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<ShopResponseType[] | undefined, Error>>;
};

export type UpdateShopPropsType = {
  shop: ShopResponseType;
  id: string;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<ShopResponseType[] | undefined, Error>>;
};

export type SelectShopType = {
  shop: string;
  shops: ShopResponseType[];
  variant?: "flat" | "faded" | "bordered";
  setShop: React.Dispatch<React.SetStateAction<string>>;
};
