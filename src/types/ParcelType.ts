import { UserType } from "./UserType";

export enum Status {
  Pending = "pending",
  Accepted = "accepted",
  Picked = "picked",
  Delivered = "delivered",
  Returned = "returned",
  Canceled = "canceled",
}

export enum PaymentStatus {
  Pending = "pending",
  Paid = "paid",
  Canceled = "cancelled",
}

type Address = {
  division: string;
  district: string;
  address: string;
};

type SenderInfo = {
  name: string;
  email: string;
  number: string;
  address: Address;
};

type RecipientInfo = {
  name: string;
  email: string;
  number: string;
  address: Address;
};

type MerchantInfo = {
  merchantId: string;
  ownerName: string;
  shopName: string;
  number: string;
  email: string;
  address: Address;
};

export type ParcelType = {
  _id?: string;
  parcelId?: string;
  senderInfo?: SenderInfo;
  recipientInfo: RecipientInfo;
  parcelWeight: string;
  parcelQuantity: string;
  shippingMethod: string;
  parcelStatus: Status;
  deliveryDateTime: string;
  merchantInfo?: MerchantInfo;
  paymentInfo: {
    method: string;
    status: PaymentStatus;
    amount: number;
  };
  description?: string;
};

export type UpdateParcelType = {
  id: string;
  data: {
    recipientInfo: {
      name: string;
      email: string;
      number: string;
      address: {
        division: string;
        district: string;
        address: string;
      };
    };
    description: string;
  };
};

export type ParcelFormProps = {
  division: string;
  setDivision: React.Dispatch<React.SetStateAction<string>>;
  shippingMethod: string;
  setShippingMethod: React.Dispatch<React.SetStateAction<string>>;
  weight: string;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  estimatedTotal: number;
  userInfo: UserType;
};

export type ParcelSummaryType = {
  shippingFee: number;
  weightCharge: number;
  discount: number;
  subTotal: number;
  tax: number;
  estimatedTotal: number;
};

export type ParcelDataType = {
  address: string;
  email: string;
  name: string;
  number: string;
  quantity: string;
  weight: string;
  description: string;
};
