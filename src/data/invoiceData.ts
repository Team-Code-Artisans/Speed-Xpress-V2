import { ChipProps } from "@nextui-org/react";

const columns = [
  { name: "PARCEL ID", uid: "id" },
  { name: "DATE", uid: "date" },
  { name: "NAME", uid: "name" },
  { name: "NUMBER", uid: "number" },
  { name: "SHIPPING", uid: "shipping" },
  { name: "PARCEL INFO", uid: "info" },
  { name: "PAYMENT", uid: "payment" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Pending", uid: "pending" },
  { name: "Accepted", uid: "accepted" },
  { name: "Picked", uid: "picked" },
  { name: "Delivered", uid: "delivered" },
  { name: "Returned", uid: "returned" },
  { name: "Canceled", uid: "canceled" },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  pending: "default",
  accepted: "primary",
  picked: "secondary",
  delivered: "success",
  returned: "warning",
  canceled: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "id",
  "date",
  "name",
  "number",
  "shipping",
  "status",
  "info",
  "payment",
  "amount",
  "actions",
];

export { INITIAL_VISIBLE_COLUMNS, columns, statusColorMap, statusOptions };
