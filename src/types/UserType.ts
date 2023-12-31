export type UserType = {
  _id?: string | null;
  name?: string | null;
  email?: string | null;
  photoURL?: string | null;
  number?: string | null;
  division?: string | null;
  district?: string | null;
  address?: string | null;
  role?: string | null;
  shopName?: string | null;
  vehicle?: string | null;
};

export type UpdateUserType = {
  id: string | null;
  data: UserType | null;
};

export type JWTUserType = {
  email: string;
  role: string;
};
