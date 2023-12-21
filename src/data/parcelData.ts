const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "SHIPPING METHOD", uid: "shipping", sortable: true },
  { name: "WEIGHT", uid: "weight", sortable: true },
  { name: "QUANTITY", uid: "quantity", sortable: true },
  { name: "PAYMENT", uid: "payment", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

export { columns, statusOptions };
