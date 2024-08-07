import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { grey } from "../theme/palette";
import CustomButton from "../components/customButton/customButton";
import AddModal from "../components/addModal/addModal";
import { useState } from "react";
import { NewMovie } from "../types/Movies";
import { paths } from "../config/paths";
import { useAddMovieMutation } from "../rtk/api";

interface SidebarProps {
  closeSidebar?: () => void;
}

export default function Sidebar({ closeSidebar }: SidebarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addMovie] = useAddMovieMutation()

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveEdit = (newMovie: NewMovie) => {
    addMovie(newMovie).then(handleModalClose);
  };

  return (
    <Box
      sx={{
        backgroundColor: grey[200],
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        minHeight: "100vh",
        padding: "100px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Link to={paths.HOME}>
        <Button sx={{ borderRadius: "50%", padding: "0" }} color="info">
          <img
            src="https://i.pinimg.com/564x/a9/f9/a8/a9f9a83bb6ea2585c9845fd78fc35994.jpg"
            alt="Logo"
            style={{
              borderRadius: "50%",
              width: "200px",
            }}
          />
        </Button>
      </Link>
      <Link
        to={paths.HOME}
        style={{ textDecoration: "none" }}
        onClick={closeSidebar}
      >
        <Typography variant="h4" color={"primary"} textAlign={"center"}>
          Home
        </Typography>
      </Link>
      <Link
        to={paths.FAVOURITES}
        style={{ textDecoration: "none" }}
        onClick={closeSidebar}
      >
        <Typography variant="h4" color={"primary"} textAlign={"center"}>
          Favourites💙
        </Typography>
      </Link>
      <CustomButton text="Add new movie" onClick={() => setIsModalOpen(true)} />
      <AddModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleSaveEdit}
      />
    </Box>
  );
}
