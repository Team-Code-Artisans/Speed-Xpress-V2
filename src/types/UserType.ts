export type UserType = {
  _id?: string;
  name: string;
  email: string;
  photoURL: string;
  number: string;
  division: string;
  district: string;
  address: string;
  role: string;
  shop_name?: string;
  vehicle?: string;
};

export type UpdateUserType = {
  id: string;
  data: UserType;
};

export type JWTUserType = {
  email: string;
  role: string;
};
