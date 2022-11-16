import "../Style/styles.css";
import React, { useState } from "react";
import { AddProduct } from "../Components/popupUpload";
import { Button } from "../Components/popupUpload";
import AppBar from "../Components/appbar";

export default function UploadProduct() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <div className="UploadProduct">
      <Button handleLoginClick={handleLoginClick} />
      <AddProduct isShowLogin={isShowLogin} />
    </div>
  );
}
