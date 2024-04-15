import { ReactNode } from "react";

import Main from "./main";
import Sidebar from "./sidebar";
import { Grid } from "@mui/material";

import ToTopButton from "../components/toTopButton/toToButton";

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

      <ToTopButton />
    </>
  );
}

export default Layout;
