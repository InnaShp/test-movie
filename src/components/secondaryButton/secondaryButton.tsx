import { ReactNode } from "react";
import { Button } from "@mui/material";


interface SecondaryButtonProps {
  onClick: () => void;
  children: ReactNode;
  color: "error" | "success";
}

export default function SecondaryButton({ onClick, children, color }: SecondaryButtonProps) {
  return (
    <Button
      sx={{
        height: "50px",
        width: "50px",
        fontSize: "17px",
      }}
      variant="contained"
      color={color}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
