import * as React from "react";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";
import AppBar from "../Components/Navbar/appbar";
import ListCards from "../Components/Card/listCards";
// import Divider from "../Components/Utils/divider";
import TeamHeader from "../Components/UserTeam/teamHeader";
import serverURI from "../Constants/connection";
import Footer from "../Components/Navbar/footer";

const theme = createTheme();

export default function TeamPage() {
  const { teamName } = useParams();
  const [email, setEmail] = React.useState(teamName + `@gmail.com`);
  const [myOption, setOption] = React.useState(0);

  const { id } = useParams();
  const sort = id + "-" + myOption;
  console.log(id);
  let uri = serverURI + `/products/team/${sort}`; //option ekle

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <TeamHeader email={email}></TeamHeader>
      <Divider></Divider>
      <ListCards email={email} admin={false} uri={uri}></ListCards>
      <Footer></Footer>
    </ThemeProvider>
  );
}
