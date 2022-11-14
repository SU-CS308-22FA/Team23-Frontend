import React, { useState } from "react";
import { LoginForm } from "../Components/card";
import { Button } from "../Components/card";
import "./style.css";

export default function Test() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <div className="Test">
      <Button handleLoginClick={handleLoginClick} />
      <LoginForm isShowLogin={isShowLogin} />
    </div>
  );
}
