import { Pagination } from "@mui/material";

interface PaginationBoxProps {
  count: number;
  page: number;
  setPage: (page: number) => void;
}

export default function PaginationBox({
  count,
  page,
  setPage,
}: PaginationBoxProps) {
  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };
  return (
    <Pagination
      count={count}
      page={page}
      color="primary"
      onChange={handleChange}
    />
  );
}
