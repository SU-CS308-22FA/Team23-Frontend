import * as React from "react";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppBar from "../Components/Navbar/appbar";
import ListCards from "../Components/Card/listCards";
import Divider from "../Components/Utils/divider";
import TeamHeader from "../Components/Team/teamHeader";
import serverURI from "../Constants/connection";
import { UpdateProduct, AddProduct } from "../Components/Team/popupForm";

const theme = createTheme();

export default function AdminPage() {
  const [showFormUpdate, setshowFormUpdate] = React.useState(false);
  const [showFormUpload, setshowFormUpload] = React.useState(false);
  const [uploadChange, setUploadChange] = React.useState(false);
  const [myOption, setOption] = React.useState(0);

  const [myid, setId] = React.useState("");

  function isUploadChange() {
    if (uploadChange === false) {
      setUploadChange(true);
    }
    if (uploadChange === true) {
      setUploadChange(false);
    }
  }

  function isShowFormUpdate(data) {
    if (showFormUpdate === false) {
      setshowFormUpdate(true);
      setId(data);
    }
    if (showFormUpdate === true) {
      setshowFormUpdate(false);
      setId(data);
    }
  }

  function isShowFormUpload(data) {
    if (showFormUpload === false) {
      setshowFormUpload(true);
      // setId(data);
    }
    if (showFormUpload === true) {
      setshowFormUpload(false);
      // setId(data);
    }
  }


  function func1(data) {
    console.log(data);
    setOption(data);
  }

  React.useEffect(() => {

  }, [uploadChange]);


  const { id } = useParams();
  let uri = serverURI + `/products/team/${id}`; //option ekle


  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      {showFormUpload ? <AddProduct func2={isUploadChange} func={isShowFormUpload}></AddProduct> : ""}
      <TeamHeader email={id} func={isShowFormUpload}></TeamHeader>
      <Divider func={func1}></Divider>
      {showFormUpdate ? <UpdateProduct id={myid} func={isShowFormUpdate}></UpdateProduct> : ""}
      <ListCards admin={true} uri={uri} func={isShowFormUpdate}></ListCards>
    </ThemeProvider>
  );
}
