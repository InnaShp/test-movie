import { ReactNode } from "react";

import Main from "./main";
import Sidebar from "./sidebar";
import { Grid } from "@mui/material";

//import ScrollToTopButton from "../components/ScrollToTopButton";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Main>{children}</Main>
        </Grid>
      </Grid>

      {/* <ScrollToTopButton /> */}
    </>
  );
}

export default Layout;
