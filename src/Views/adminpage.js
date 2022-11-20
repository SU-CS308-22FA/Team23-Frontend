import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppBar from "../Components/appbar";
import ListCards from "../Components/listCards";
import HotCards from "../Components/hot";
import Divider from "../Components/divider";
import TeamHeader from "../Components/teamHeader";
import { useParams } from "react-router-dom";
import serverURI from "../Constants/connection";
import { UpdateProduct } from "../Components/popupUpload";

const theme = createTheme();

export default function AdminPage() {
  const [showForm, setshowForm] = React.useState(false);
  const [myid, setId] = React.useState("");
  function isShowForm(data) {
    if (showForm === false) {
      setshowForm(true);
      setId(data);
    }
    if (showForm === true) {
      setshowForm(false);
      setId(data);
    }
  }
  const { id } = useParams();
  let uri = serverURI + `/products/team/${id}`;
  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <TeamHeader email={id}></TeamHeader>
      <Divider></Divider>
      {showForm ? <UpdateProduct id={myid} func={isShowForm}></UpdateProduct> : ""}
      <ListCards admin={true} uri={uri} func={isShowForm}></ListCards>
    </ThemeProvider>
  );
}
