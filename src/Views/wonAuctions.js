import * as React from "react";
import { useParams } from "react-router-dom";
import ListOpenItems from "../Components/ActiveBids/listopenItems";
import AppBar from "../Components/Navbar/appbar";

export default function WonAuctions() {
  const { email } = useParams();

  return (
    <>
      <AppBar></AppBar>
      <ListOpenItems email={email} active="false"></ListOpenItems>
    </>
  );
}