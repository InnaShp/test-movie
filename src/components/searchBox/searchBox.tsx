import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { grey } from "../../theme/palette";

import SearchIcon from "@mui/icons-material/Search";

const StyledSearchBox = styled("div")(() => ({
  width: "70%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "40px",
  borderRadius: "8px",
  backgroundColor: "white",
  border: `2px solid ${grey[300]}`,
}));

interface SearchBoxProps {
  setSearchText: (value: string) => void;
  searchText: string;
}

export default function SearchBox({ setSearchText, searchText }: SearchBoxProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <StyledSearchBox>
      <Box
        sx={{
          paddingLeft: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SearchIcon />
      </Box>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        placeholder="Search"
        value={searchText}
        onChange={handleSearchChange}
        sx={{
          lineHeight: "24px",
          fontSize: "16px",
          position: "absolute",
          left: "50px",
        }}
      />
    </StyledSearchBox>
  );
}
