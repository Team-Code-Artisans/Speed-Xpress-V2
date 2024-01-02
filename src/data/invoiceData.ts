import { ChipProps } from "@nextui-org/react";

const columns = [
  { name: "DATE", uid: "date" },
  { name: "PARCEL ID", uid: "parcelId" },
  { name: "INVOICE ID", uid: "invoiceId" },
  { name: "NAME", uid: "name" },
  { name: "AMOUNT", uid: "amount" },
  { name: "METHOD", uid: "method" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Pending", uid: "pending" },
  { name: "Paid", uid: "paid" },
  { name: "Canceled", uid: "canceled" },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  pending: "default",
  paid: "success",
  canceled: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "parcelId",
  "invoiceId",
  "date",
  "name",
  "amount",
  "method",
  "status",
  "actions",
];

export { INITIAL_VISIBLE_COLUMNS, columns, statusColorMap, statusOptions };
