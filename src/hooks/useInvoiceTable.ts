import { INITIAL_VISIBLE_COLUMNS } from "@/data/invoiceData";
import { Selection } from "@nextui-org/react";
import { useCallback, useState } from "react";

// pagination functionality
const usePagination = (initialPage = 1) => {
  const [page, setPage] = useState(initialPage);

  const onNextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const onPreviousPage = useCallback(() => {
    setPage((prevPage) => Math.max(1, prevPage - 1));
  }, []);

  return { page, setPage, onNextPage, onPreviousPage };
};

// filtering functionality
const useFilter = () => {
  const [filterValue, setFilterValue] = useState("");

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
  }, []);

  return { filterValue, onSearchChange, onClear };
};

// visible columns
const useVisibleColumns = () => {
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );

  return { visibleColumns, setVisibleColumns };
};

export { useFilter, usePagination, useVisibleColumns };
