"use client";

import { columns, statusColorMap, statusOptions } from "@/data/parcelData";
import { useParcel } from "@/hooks/useParcel";
import {
  useFilter,
  usePagination,
  useVisibleColumns,
} from "@/hooks/useParcelTable";
import { ParcelType, Status } from "@/types/ParcelType";
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
  useDisclosure,
} from "@nextui-org/react";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

// icons
import { useAuth } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import { updateParcelStatus } from "@/utils/api/parcel";
import { useRouter } from "next/navigation";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { FaChevronDown as ChevronDownIcon } from "react-icons/fa";
import { HiDotsVertical as VerticalDotsIcon } from "react-icons/hi";
import ParcelUpdateModal from "./ParcelUpdateModal";

const ParcelTable = () => {
  // hooks
  let { parcels, isLoading, refetch } = useParcel();
  const { role } = useAuth();
  const { page, setPage, onNextPage, onPreviousPage } = usePagination();
  const { filterValue, onSearchChange, onClear } = useFilter();
  const { visibleColumns, setVisibleColumns } = useVisibleColumns();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  if (role === "rider") {
    parcels = parcels.filter(
      (parcel) => parcel.parcelStatus !== Status.Pending
    );
  }

  // states
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [updateId, setUpdateId] = useState<string | null>(null);

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
          (parcel?.recipientInfo?.name &&
            parcel?.recipientInfo?.name
              .toLowerCase()
              .includes(filterValue.toLowerCase())) ||
          (parcel?.recipientInfo?.email &&
            parcel?.recipientInfo?.email
              .toLowerCase()
              .includes(filterValue.toLowerCase())) ||
          (parcel?.parcelId &&
            parcel?.parcelId.toLowerCase().includes(filterValue.toLowerCase()));

        return isMatch;
      });
    }

    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredParcels = filteredParcels.filter((parcel) =>
        Array.from(statusFilter).includes(parcel?.parcelStatus)
      );
    }

    return filteredParcels;
  }, [parcels, hasSearchFilter, statusFilter, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const renderCell = useCallback(
    (parcel: ParcelType, columnKey: string | number): React.ReactNode => {
      const cellValue = parcel[columnKey as keyof ParcelType];
      const [date, time] = parcel?.deliveryDateTime.split(", ");

      const handleEdit = (id: string) => {
        onOpen();
        setUpdateId(id);
      };

      const handleAcceptByAdmin = async (id: string) => {
        const updateResponse = await updateParcelStatus({
          id,
          data: { parcelStatus: Status.Accepted },
        });

        if (updateResponse.code === "success") {
          refetch();
        } else {
          console.error(updateResponse.error);
        }
      };

      const handleAcceptByRider = async (id: string) => {
        const updateResponse = await updateParcelStatus({
          id,
          data: { parcelStatus: Status.Picked },
        });

        if (updateResponse.code === "success") {
          refetch();
        } else {
          console.error(updateResponse.error);
        }
      };

      const handleDeliveredByRider = async (id: string) => {
        const updateResponse = await updateParcelStatus({
          id,
          data: { parcelStatus: Status.Delivered },
        });

        if (updateResponse.code === "success") {
          refetch();
        } else {
          console.error(updateResponse.error);
        }
      };

      const handleView = (id: string) => {
        if (role !== "rider") {
          router.push(`/dashboard/${role}/parcels/${id}`);
        } else {
          router.push(`/dashboard/${role}/deliveries/${id}`);
        }
      };

      const handleDelete = (id: string) => {
        console.log(id);
      };

      switch (columnKey) {
        case "id":
          return (
            <Snippet variant="flat" radius="sm">
              {parcel?.parcelId}
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
              <p className="font-medium text-small capitalize">
                {parcel?.recipientInfo?.name}
              </p>
              <p className="text-tiny text-default-500">
                {parcel?.recipientInfo?.email}
              </p>
            </>
          );
        case "number":
          return (
            <p className="font-medium text-small capitalize">
              {parcel?.recipientInfo?.number}
            </p>
          );
        case "shipping":
          return (
            <Chip
              color={
                parcel?.shippingMethod === "express" ? "primary" : "default"
              }
              size="sm"
              variant="flat"
            >
              <span className="font-medium capitalize text-small">
                {parcel?.shippingMethod}
              </span>
            </Chip>
          );
        case "info":
          return (
            <>
              <p className="text-small capitalize">
                Weight:{" "}
                <span className="font-medium">{parcel?.parcelWeight} KG</span>
              </p>
              <p className="text-small capitalize">
                Quantity:{" "}
                <span className="font-medium">
                  {parcel?.parcelQuantity} PCS
                </span>
              </p>
            </>
          );
        case "payment":
          return (
            <>
              <p className="text-small capitalize whitespace-nowrap">
                Status:{" "}
                <span className="font-medium">
                  {parcel?.paymentInfo.status}
                </span>
              </p>
              <p className="text-small capitalize whitespace-nowrap">
                Amount:{" "}
                <span className="font-medium">
                  ${parcel?.paymentInfo.amount}
                </span>
              </p>
            </>
          );
        case "status":
          return (
            <Chip
              color={statusColorMap[parcel?.parcelStatus]}
              size="sm"
              variant="flat"
            >
              <span className="font-medium capitalize text-small">
                {parcel?.parcelStatus}
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
                    onClick={() => handleView(`${parcel?.parcelId}`)}
                  >
                    View
                  </DropdownItem>
                  {role !== "rider" ? (
                    <DropdownItem
                      className="text-left"
                      textValue="edit"
                      as="button"
                      onClick={() => handleEdit(`${parcel?.parcelId}`)}
                    >
                      Edit
                    </DropdownItem>
                  ) : (
                    <DropdownItem className="hidden"></DropdownItem>
                  )}

                  {role === "admin" &&
                  parcel.parcelStatus !== Status.Accepted ? (
                    <DropdownItem
                      textValue="accept by admin"
                      className="text-left"
                      as="button"
                      onClick={() => handleAcceptByAdmin(`${parcel?._id}`)}
                    >
                      Accept
                    </DropdownItem>
                  ) : (
                    <DropdownItem className="hidden"></DropdownItem>
                  )}

                  {role === "rider" &&
                  parcel.parcelStatus === Status.Accepted &&
                  // @ts-ignore
                  parcel.parcelStatus !== Status.Picked ? (
                    <DropdownItem
                      textValue="accept by rider"
                      className="text-left"
                      as="button"
                      onClick={() => handleAcceptByRider(`${parcel?._id}`)}
                    >
                      Picked
                    </DropdownItem>
                  ) : (
                    <DropdownItem className="hidden"></DropdownItem>
                  )}

                  {role === "rider" &&
                  parcel.parcelStatus === Status.Picked &&
                  // @ts-ignore
                  parcel.parcelStatus !== Status.Delivered ? (
                    <DropdownItem
                      textValue="delivered"
                      className="text-left"
                      as="button"
                      onClick={() => handleDeliveredByRider(`${parcel?._id}`)}
                    >
                      Delivered
                    </DropdownItem>
                  ) : (
                    <DropdownItem className="hidden"></DropdownItem>
                  )}

                  {role === "rider" ? (
                    <DropdownItem className="hidden"></DropdownItem>
                  ) : (
                    <DropdownItem
                      textValue="delete"
                      className="text-left"
                      as="button"
                      onClick={() => handleDelete(`${parcel?._id}`)}
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
    [onOpen, refetch, role, router]
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
    onSearchChange,
    statusFilter,
    visibleColumns,
    setVisibleColumns,
    parcels.length,
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
          emptyContent={isLoading ? <Loading size="lg" /> : "No parcels found"}
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

      <ParcelUpdateModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        id={updateId}
        refetch={refetch}
      />
    </>
  );
};

export default ParcelTable;
