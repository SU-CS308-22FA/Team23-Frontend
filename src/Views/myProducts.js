import * as React from "react";
import { useParams } from "react-router-dom";
import ListPurchase from "../Components/Purchased/listmyPurchase";
import AppBar from "../Components/Navbar/appbar";

export default function ActiveBids() {
  const { email } = useParams();

  return (
    <>
      <AppBar></AppBar>
      <ListPurchase email={email}></ListPurchase>
    </>
  );
}
