import * as React from "react";
import { useParams } from "react-router-dom";
import ListOpenItems from "../Components/ActiveBids/listopenItems";
import CardSelection from "../Components/Payment/cardSelection"
import AppBar from "../Components/Navbar/appbar";
import { Card } from "@mui/material";

export default function WonAuctions() {
  const { email } = useParams();
  const [cardSelection, setCardSelection] = React.useState(false);
  const [pid, setPid] = React.useState();

  function popUp(data) {
    setCardSelection(!cardSelection);
    setPid(data);

    console.log(data);
  }

  function close() {
    setCardSelection(false);
  }

  return (
    <>
      <AppBar></AppBar>
      <ListOpenItems popUp={popUp} email={email} active="false"></ListOpenItems>
      {cardSelection ? (
        <CardSelection> close = {close} id = {pid} </CardSelection>
      ) : ("")}
    </>
  );
}