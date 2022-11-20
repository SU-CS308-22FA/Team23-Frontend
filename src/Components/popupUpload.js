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
import "../Style/styles.css";
import serverURI from "../Constants/connection";

function ButtonForm({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return <Button onClick={handleClick}>Upload</Button>;
}

const UpdateProduct = (props) => {
  const id = props.id;
  // console.log(id);

  const history = useNavigate();
  const [data, setData] = useState({
    name: "",
    image: "",
    type: "",
    owner: "",
    price: "",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmitUpdate = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("owner", data.owner);
      formData.append("type", data.type);
      formData.append("price", data.price);
      const path = serverURI + "/products/update/" + id;

      const res = await fetch(`${path}`, {
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", owner: "", type: "", image: "", price: "" });
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ position: "fixed", top: "30%", left: "40%", zIndex: 1 }}>
      <div className="show">
        <Box
          sx={{
            bgcolor: "primary",
            alignItems: "center",
            position: "absolute",
            left: "39%",
            top: "30%",
            zIndex: 1,
            height: 300,
            width: 400,
          }}
        >
          <div className="form-box">
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              label="Enter price"
              placeholder="price"
              name="price"
              value={data.price}
              onChange={handleChange("price")}
            />
            <input
              className="form-control"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange("image")}
            />

            <div className="text-center">
              <button className="btn btn-primary" onClick={handleSubmitUpdate}>
                Submit
              </button>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
};

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
    price: "",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmitUpload = async () => {
    try {
      let currentDate = Date.now();
      let duration = 604800000;
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("owner", data.owner);
      formData.append("type", data.type);
      formData.append("price", data.price);
      formData.append("email", email);
      formData.append("currentDate", currentDate);
      formData.append("duration", duration);
      const res = await fetch(`http://localhost:3000/products/upload`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", owner: "", type: "", image: "", price: "" });
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      {isShowLogin ? (
        <div className="active show" />
      ) : (
        <div className="show">
          <Box
            sx={{
              bgcolor: "primary",
              alignItems: "center",
              position: "absolute",
              left: "39%",
              top: "30%",
              zIndex: 1,
              height: 300,
              width: 400,
            }}
          >
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
              <TextField
                margin="normal"
                required
                fullWidth
                id="price"
                label="Enter price"
                placeholder="price"
                name="price"
                value={data.price}
                onChange={handleChange("price")}
              />
              <input
                className="form-control"
                type="file"
                accept="image/*"
                name="image"
                onChange={handleChange("image")}
              />

              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={handleSubmitUpload}
                >
                  Submit
                </button>
              </div>
            </div>
          </Box>
        </div>
      )}
    </Box>
  );
};

export { AddProduct, ButtonForm, UpdateProduct };
