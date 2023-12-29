export type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  number: string;
  address: string;
  shop_name?: string;
};

export type DivisionPropsType = {
  variant?: "flat" | "faded" | "bordered";
  division: string;
  setDivision: React.Dispatch<React.SetStateAction<string>>;
  setDistrict: React.Dispatch<React.SetStateAction<string>>;
};

export type DistrictPropsType = {
  variant?: "flat" | "faded" | "bordered";
  district: string;
  division: string;
  setDistrict: React.Dispatch<React.SetStateAction<string>>;
};

export type ProfileFormType = {
  name: string;
  number: string;
  address: string;
  division?: string;
  district?: string;
};

export type ProfileFormProps = {
  onClose: () => void;
};
