import { Box } from "@mui/material";

import { grey } from "../theme/palette";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: grey[300],
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        padding: "60px 0"
      }}
    >
      Favourites
    </Box>
  );
}
