export type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  number: string;
  address: string;
  shop_name?: string;
};

export type DivisionType = {
  variant?: "flat" | "faded" | "bordered";
  division: string;
  setDivision: React.Dispatch<React.SetStateAction<string>>;
};

export type DistrictType = {
  variant?: "flat" | "faded" | "bordered";
  district: string;
  setDistrict: React.Dispatch<React.SetStateAction<string>>;
};
