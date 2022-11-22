import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "../Components/appbar";
import ListCards from "../Components/listCards";
import Divider from "../Components/divider";
import TeamHeader from "../Components/teamHeader";
import { useParams } from "react-router-dom";
import serverURI from "../Constants/connection";
import { UpdateProduct, AddProduct } from "../Components/popupUpload";

const theme = createTheme();

export default function AdminPage() {
  const [showFormUpdate, setshowFormUpdate] = React.useState(false);
  const [showFormUpload, setshowFormUpload] = React.useState(false);
  const [uploadChange, setUploadChange] = React.useState(false);

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

  React.useEffect(() => {
    
}, [uploadChange]);


  const { id } = useParams();
  let uri = serverURI + `/products/team/${id}`;



  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      {showFormUpload ? <AddProduct func2={isUploadChange} func={isShowFormUpload}></AddProduct> : ""}
      <TeamHeader email={id} func={isShowFormUpload}></TeamHeader>
      <Divider></Divider>
      {showFormUpdate ? <UpdateProduct id={myid} func={isShowFormUpdate}></UpdateProduct> : ""}
      <ListCards admin={true} uri={uri} func={isShowFormUpdate}></ListCards>
    </ThemeProvider>
  );
}
