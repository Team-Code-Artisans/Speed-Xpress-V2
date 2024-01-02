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
