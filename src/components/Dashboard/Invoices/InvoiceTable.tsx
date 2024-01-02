"use client";

import { columns, statusColorMap, statusOptions } from "@/data/invoiceData";
import {
  useFilter,
  usePagination,
  useVisibleColumns,
} from "@/hooks/useInvoiceTable";
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
import { useAuth } from "@/hooks/useAuth";
import { useInvoice } from "@/hooks/useInvoice";
import { InvoiceType } from "@/types/invoiceType";
import Loading from "@/ui/Loading";
import { useRouter } from "next/navigation";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { FaChevronDown as ChevronDownIcon } from "react-icons/fa";
import { HiDotsVertical as VerticalDotsIcon } from "react-icons/hi";

const InvoiceTable = () => {
  // hooks
  const { invoices, isLoading } = useInvoice();
  const { role } = useAuth();
  const { page, setPage, onNextPage, onPreviousPage } = usePagination();
  const { filterValue, onSearchChange, onClear } = useFilter();
  const { visibleColumns, setVisibleColumns } = useVisibleColumns();
  const router = useRouter();

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
    let filteredInvoices = [...invoices];

    if (hasSearchFilter) {
      filteredInvoices = filteredInvoices.filter((invoice) => {
        const isMatch =
          (invoice?.userName &&
            invoice?.userName
              .toLowerCase()
              .includes(filterValue.toLowerCase())) ||
          (invoice?.userEmail &&
            invoice?.userEmail
              .toLowerCase()
              .includes(filterValue.toLowerCase())) ||
          (invoice?.parcelId &&
            invoice?.parcelId
              .toLowerCase()
              .includes(filterValue.toLowerCase())) ||
          (invoice?.invoiceId &&
            invoice?.invoiceId
              .toLowerCase()
              .includes(filterValue.toLowerCase()));

        return isMatch;
      });
    }

    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredInvoices = filteredInvoices.filter((invoice) =>
        Array.from(statusFilter).includes(invoice?.status)
      );
    }

    return filteredInvoices;
  }, [invoices, hasSearchFilter, statusFilter, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const renderCell = useCallback(
    (invoice: InvoiceType, columnKey: string | number): React.ReactNode => {
      const cellValue = invoice[columnKey as keyof InvoiceType];
      const [date, time] = invoice?.paymentDateTime.split(", ");

      const handleView = (id: string) => {
        if (role !== "rider") {
          router.push(`/dashboard/${role}/invoices/${id}`);
        }
      };

      const handleDelete = (id: string) => {
        console.log(id);
      };

      switch (columnKey) {
        case "date":
          return (
            <>
              <p className="text-small whitespace-nowrap">{date}</p>
              <p className="text-small whitespace-nowrap">{time}</p>
            </>
          );
        case "parcelId":
          return (
            <Snippet variant="flat" radius="sm">
              {invoice?.parcelId}
            </Snippet>
          );
        case "invoiceId":
          return (
            <Snippet variant="flat" radius="sm">
              {invoice?.invoiceId}
            </Snippet>
          );
        case "name":
          return (
            <>
              <p className="font-medium text-small capitalize">
                {invoice?.userName}
              </p>
              <p className="text-tiny text-default-500">{invoice?.userEmail}</p>
            </>
          );
        case "amount":
          return (
            <p className="font-medium text-small capitalize">
              ${invoice?.amount}
            </p>
          );
        case "method":
          return (
            <Chip
              color={
                invoice?.paymentMethod === "online" ? "primary" : "default"
              }
              size="sm"
              variant="flat"
            >
              <span className="font-medium capitalize text-small">
                {invoice?.paymentMethod}
              </span>
            </Chip>
          );
        case "status":
          return (
            <Chip
              color={statusColorMap[invoice?.status]}
              size="sm"
              variant="flat"
            >
              <span className="font-medium capitalize text-small">
                {invoice?.status}
              </span>
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
                  <DropdownItem
                    className="text-left"
                    textValue="view"
                    as="button"
                    onClick={() => handleView(`${invoice?.invoiceId}`)}
                  >
                    View
                  </DropdownItem>

                  {role !== "admin" ? (
                    <DropdownItem className="hidden"></DropdownItem>
                  ) : (
                    <DropdownItem
                      textValue="delete"
                      className="text-left"
                      as="button"
                      onClick={() => handleDelete(`${invoice?._id}`)}
                    >
                      Delete
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return <>{cellValue}</>;
      }
    },
    [role, router]
  );

  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    [setPage]
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
            Total {invoices.length} Invoices
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
    onSearchChange,
    statusFilter,
    visibleColumns,
    setVisibleColumns,
    invoices.length,
    onRowsPerPageChange,
    onClear,
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
  }, [page, pages, setPage, onPreviousPage, onNextPage]);

  return (
    <>
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
          {(column: { name: string; uid: string }) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={isLoading ? <Loading size="lg" /> : "No invoice found"}
          items={items}
        >
          {(item) => (
            <TableRow key={item.parcelId}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default InvoiceTable;
