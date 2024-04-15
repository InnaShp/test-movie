import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return <>{children}</>;
}

export default Main;
