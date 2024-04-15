import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';

const StyledSearchBox = styled("div")(() => ({
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "40px",
  borderRadius: "8px",
}));

export default function SearchBox() {
  return (
    <StyledSearchBox>
      <Box
        sx={{
          paddingLeft: "16px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <SearchIcon />
      </Box>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        placeholder="Search"
        sx={{
          lineHeight: "24px",
          fontSize: "16px",
          position: "absolute",
          left: "42px",
          top: "5px",
        }}
      />
    </StyledSearchBox>
  );
}