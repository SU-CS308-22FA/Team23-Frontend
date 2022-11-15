import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Button({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    <div>
      <span onClick={handleClick} className="loginicon">
        Sign In
      </span>
    </div>
  );
}

const AddProduct = ({ isShowLogin }) => {
  const history = useNavigate();
  const [data, setData] = useState({
    name: "",
    image: "",
    type: "",
    owner: "",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("owner", data.owner);
      formData.append("type", data.type);
      const res = await fetch(`http://localhost:3000/products/upload`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", owner: "", type: "", image: "" });
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <Box sx={{ position: "absolute", left: "40%", top: "40%", zIndex: 1 }}>
        <div className="login-form">
          <div className="form-box solid">
            <input
              className="form-control"
              placeholder="Type"
              type="text"
              name="type"
              value={data.type}
              onChange={handleChange("type")}
            />
          </div>
          <div className="form-box solid">
            <input
              className="form-control"
              placeholder="Enter name"
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange("name")}
            />
          </div>
          <div className="form-box solid">
            <input
              className="form-control"
              placeholder="Owner"
              type="text"
              name="owner"
              value={data.owner}
              onChange={handleChange("owner")}
            />
          </div>
          <div className="form-box solid">
            <input
              className="form-control"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange("image")}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export { AddProduct, Button };
