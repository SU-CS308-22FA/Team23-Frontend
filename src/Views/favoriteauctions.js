import * as React from "react";
import { useParams } from "react-router-dom";
import ListFavItems from "../Components/FavItems/listfavItems";
import AppBar from "../Components/Navbar/appbar";

export default function FavItems() {
  const { email } = useParams();

  return (
    <>
      <AppBar></AppBar>
      <ListFavItems email={email}></ListFavItems>
    </>
  );
}
