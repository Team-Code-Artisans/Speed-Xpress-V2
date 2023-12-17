export type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  number: string;
  address: string;
  shop_name?: string;
};

export type DivisionType = {
  division: string;
  setDivision: React.Dispatch<React.SetStateAction<string>>;
};

export type DistrictType = {
  district: string;
  setDistrict: React.Dispatch<React.SetStateAction<string>>;
};
