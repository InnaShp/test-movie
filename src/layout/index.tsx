import { ReactNode } from "react";

import Main from "./main";

//import ScrollToTopButton from "../components/ScrollToTopButton";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Main>{children}</Main>

      {/* <ScrollToTopButton /> */}
    </>
  );
}

export default Layout;
