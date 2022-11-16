import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Cookies from "universal-cookie";
import "../Style/styles.css"

function ButtonForm({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    <Button onClick={handleClick}>
      Upload
    </Button>
  );
}

const AddProduct = ({ isShowLogin }) => {
  const cookie = new Cookies();
  cookie.get("email");
  const email = cookie.cookies.email;

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
      formData.append("email", email);
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
      <Box sx={{ alignItems: 'center', position: "absolute", left: "39%", top: "30%", zIndex: 1, height: 100, width: 400 }}>
        <div className="form-boxx">
          <TextField
            margin="normal"
            required
            fullWidth
            id="type"
            label="Enter type"
            name="type"
            placeholder="Type"
            value={data.type}
            onChange={handleChange("type")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Enter name"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={handleChange("name")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="owner"
            label="Enter owner"
            placeholder="Owner"
            name="owner"
            value={data.owner}
            onChange={handleChange("owner")}
          />
          <input
            className="form-control"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange("image")}
          />

          <div className="text-center">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </Box>
    </div >
  );
};

export { AddProduct, ButtonForm };