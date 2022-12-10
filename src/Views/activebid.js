import * as React from "react";
import { useParams } from "react-router-dom";
import OpenItems from "../Components/ActiveBids/openItems";
import ListOpenItems from "../Components/ActiveBids/listopenItems";
import AppBar from "../Components/Navbar/appbar";

export default function ActiveBids() {
  const { email } = useParams();

  return (
    <>
      <AppBar></AppBar>
      <ListOpenItems email={email}></ListOpenItems>
    </>
  );
}
