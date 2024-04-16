import { ReactNode, useState } from "react";
import { Drawer, IconButton, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Main from "./main";
import Sidebar from "./sidebar";
import ToTopButton from "../components/toTopButton/toToButton";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <IconButton
        sx={{
          display: { md: "none" },
          position: "absolute",
          top: "10px",
          right: "20px",
        }}
        onClick={toggleSidebar}
        color="inherit"
        aria-label="open sidebar"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        ModalProps={{ disableScrollLock: true }}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </Drawer>
      <Grid container>
        <Grid
          item
          md={3}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Sidebar />
        </Grid>

        <Grid item xs={12} md={9}>
          <Main>{children}</Main>
        </Grid>
      </Grid>
      <ToTopButton />
    </>
  );
}

export default Layout;
