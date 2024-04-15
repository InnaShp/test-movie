import { useEffect, useState } from "react";

import { IconButton } from "@mui/material";
import { primary } from "../../theme/palette";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function ToTopButton() {
  const [toTopButton, setToTopButton] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setToTopButton(true);
      } else setToTopButton(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {toTopButton && (
        <IconButton
          onClick={scrollUp}
          sx={{
            position: "fixed",
            bottom: "10%",
            right: "5%",
            zIndex: "300",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: "white",
            backgroundColor: primary.light,
            transition: "background-color 0.5s",
            "&:hover": {
              backgroundColor: primary.main,
            },
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </>
  );
}

export default ToTopButton;
