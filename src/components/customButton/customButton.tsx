import { Button } from "@mui/material";
import { primary } from "../../theme/palette";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

export default function CustomButton({ text, onClick }: CustomButtonProps) {
  return (
    <Button
      sx={{
        backgroundColor: primary.light,
        color: "white",
        height: "50px",
        width: "270px",
        fontSize: "17px",
        "&:hover": {
          backgroundColor: primary.main,
        },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
