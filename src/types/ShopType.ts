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

export type ShopResponseType = ShopType & {
  _id: string;
  shopId: string;
};

export type UpdateShopType = Omit<ShopType, "merchantId" & "merchantEmail">;

export type UpdateShopRequestType = {
  id: string;
  data: UpdateShopType;
};
