enum Status {
  Pending = "pending",
  Accepted = "accepted",
  InTransit = "in-transit",
  Picked = "picked",
  OutForDelivery = "out-for-delivery",
  Delivered = "delivered",
  Returned = "returned",
}

enum PaymentStatus {
  Pending = "pending",
  Paid = "paid",
  Canceled = "cancelled",
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
