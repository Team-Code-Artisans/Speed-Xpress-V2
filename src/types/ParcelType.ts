enum Status {
  Pending = "pending",
  Accepted = "accepted",
  Picked = "picked",
  Delivered = "delivered",
}

enum PaymentStatus {
  Pending = "pending",
  Paid = "paid",
}

type SenderInfo = {
  name: string;
  number: string;
  address: string;
};

type RecipientInfo = {
  name: string;
  number: string;
  address: string;
};

type MerchantInfo = {
  merchantId: string;
  merchantName: string;
  shopName: string;
  contactNumber: string;
  email: string;
  address: string;
};

type Parcel = {
  parcelId: string;
  senderInfo: SenderInfo;
  recipientInfo: RecipientInfo;
  parcelWeight: number;
  status: Status;
  deliveryDateTime: Date;
  shippingMethod: string;
  deliveryLocation: string;
  merchantInfo?: MerchantInfo;
  paymentInfo: {
    status: PaymentStatus;
    amount: number;
  };
};
