"use client";

import { columns, statusColorMap, statusOptions } from "@/data/parcelData";
import { useParcel } from "@/hooks/useParcel";
import {
  useFilter,
  usePagination,
  useVisibleColumns,
} from "@/hooks/useParcelTable";
import { ParcelType } from "@/types/ParcelType";
import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
  Selection,
  Snippet,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

// icons
import { CiSearch as SearchIcon } from "react-icons/ci";
import { FaChevronDown as ChevronDownIcon } from "react-icons/fa";
import { HiDotsVertical as VerticalDotsIcon } from "react-icons/hi";

const ParcelTable = () => {
  // hooks
  const { parcels } = useParcel();
  const { page, setPage, onNextPage, onPreviousPage } = usePagination();
  const { filterValue, onSearchChange, onClear } = useFilter();
  const { visibleColumns, setVisibleColumns } = useVisibleColumns();

  // states
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredParcels = [...parcels];

    if (hasSearchFilter) {
      filteredParcels = filteredParcels.filter((parcel) => {
        const isMatch =
          (parcel.recipientInfo.name &&
            parcel.recipientInfo.name
              .toLowerCase()
              .includes(filterValue.toLowerCase())) ||
          (parcel.recipientInfo.email &&
            parcel.recipientInfo.email
              .toLowerCase()
              .includes(filterValue.toLowerCase())) ||
          (parcel.parcelId &&
            parcel.parcelId.toLowerCase().includes(filterValue.toLowerCase()));

        return isMatch;
      });
    }

    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredParcels = filteredParcels.filter((parcel) =>
        Array.from(statusFilter).includes(parcel.parcelStatus)
      );
    }

    return filteredParcels;
  }, [parcels, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const renderCell = useCallback(
    (parcel: ParcelType, columnKey: string | number): React.ReactNode => {
      const cellValue = parcel[columnKey as keyof ParcelType];
      const [date, time] = parcel.deliveryDateTime.split(", ");

      switch (columnKey) {
        case "id":
          return (
            <Snippet variant="flat" radius="sm">
              {parcel.parcelId}
            </Snippet>
          );
        case "date":
          return (
            <>
              <p className="text-small whitespace-nowrap">{date}</p>
              <p className="text-small whitespace-nowrap">{time}</p>
            </>
          );
        case "name":
          return (
            <>
              <p className="font-semibold text-small capitalize">
                {parcel.recipientInfo.name}
              </p>
              <p className="text-tiny text-default-500">
                {parcel.recipientInfo.email}
              </p>
            </>
          );
        case "number":
          return (
            <p className="font-semibold text-small capitalize">
              {parcel.recipientInfo.number}
            </p>
          );
        case "shipping":
          return (
            <p className="font-semibold text-small capitalize">
              {parcel.shippingMethod}
            </p>
          );
        case "info":
          return (
            <>
              <p className="text-small capitalize">
                Weight:{" "}
                <span className="font-semibold">{parcel.parcelWeight}</span>
              </p>
              <p className="text-small capitalize">
                Quantity:{" "}
                <span className="font-semibold">{parcel.parcelQuantity}</span>
              </p>
            </>
          );
        case "payment":
          return (
            <>
              <p className="text-small capitalize whitespace-nowrap">
                Status:{" "}
                <span className="font-semibold">
                  {parcel.paymentInfo.status}
                </span>
              </p>
              <p className="text-small capitalize whitespace-nowrap">
                Amount:{" "}
                <span className="font-semibold">
                  {parcel.paymentInfo.amount}
                </span>
              </p>
            </>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[parcel.parcelStatus]}
              size="sm"
              variant="flat"
            >
              {parcel.parcelStatus}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="md" variant="light">
                    <VerticalDotsIcon className="text-default-600" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="action-items">
                  <DropdownItem>View</DropdownItem>
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return <>{cellValue}</>;
      }
    },
    []
  );

  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-4 items-end">
          <Input
            variant="bordered"
            radius="sm"
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search By ID, Name, Email"
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="hidden sm:flex gap-4">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {status.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {column.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-500 text-small">
            Total {parcels.length} Parcels
          </span>
          <label className="flex items-center text-default-500 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-500 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    parcels.length,
    hasSearchFilter,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      radius="sm"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[30rem]",
      }}
      topContent={topContent}
      topContentPlacement="outside"
    >
      <TableHeader columns={headerColumns}>
        {(column: any) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No parcels found"} items={filteredItems}>
        {(item) => (
          <TableRow key={item.parcelId}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ParcelTable;