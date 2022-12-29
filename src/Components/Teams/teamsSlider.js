import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import {
  Divider,
  Box,
  Typography,
  Container,
  CardActionArea,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import serverURI from "../../Constants/connection";
import { useNavigate } from "react-router-dom";

const themeLight = createTheme();
const uri = serverURI + "/teams/logos";

export default function TeamsSlider() {
  const [teams, setTeams] = React.useState([
    {
      url: "https://res.cloudinary.com/dbb2x1zfs/image/upload/v1669152744/logo/1920px-Gaziantepspor_logo.svg_notcr1.png",
      team: "test",
    },
  ]);
  React.useEffect(() => {
    console.log(uri);
    var config = {
      method: "get",
      url: uri,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        setTeams(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/teams/${id}`);
  };

  return (
    <Container maxWidth="xl" sx={{ height: 230 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ImageList
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
            gridAutoColumns: "minmax(160px, 1fr)",
          }}
        >
          {teams.map((el, idx) => {
            let name = el.team.substring(0, el.team.indexOf("@"));
            return (
              <ImageListItem key={idx}>
                <CardActionArea onClick={() => handleClick(name)}>
                  <Box sx={{ my: 4, mx: 2, display: "flex", justifyContent: "center" }}>
                    <img height="130" src={el.logo} />
                  </Box>
                </CardActionArea>
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    </Container>
  );
}
