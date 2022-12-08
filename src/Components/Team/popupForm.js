import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Box, TextField, Button, IconButton, ownerWindow } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import serverURI from "../../Constants/connection";
import "../../Style/popupForm.css";

function ButtonForm({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return <Button onClick={handleClick}>Upload</Button>;
}

const UpdateProduct = (props) => {
  const id = props.id;

  const cookie = new Cookies();
  cookie.get("email");
  const email = cookie.cookies.email;
  const owner = email.substr(0, email.indexOf("@"));
  // owner = owner[0].toUpperCase() + owner.substr(1, owner.length);
  const history = useNavigate();
  const [data, setData] = useState({
    name: "",
    image: "",
    type: "",
    price: "",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleCancel = () => {
    props.func();
  };

  const handleSubmitUpdate = async () => {
    try {
      handleCancel();
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("type", data.type);
      formData.append("price", data.price);
      const path = serverURI + "/products/update/" + id;

      const res = await fetch(`${path}`, {
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", type: "", image: "", price: "" });
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
            <TextField margin="normal" fullWidth id="owner" label={owner} disabled name="owner" placeholder="Owner" />
            <TextField
              margin="normal"
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
              <Box
                sx={{
                  mt: 1,
                  ml: 20,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <button className="btn btn-primary" onClick={handleSubmitUpdate}>
                  Submit
                </button>
              </Box>
              <IconButton
                aria-label="close"
                onClick={handleCancel}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
};

const AddProduct = (props) => {
  const cookie = new Cookies();
  cookie.get("email");
  const email = cookie.cookies.email;
  const owner = email.substr(0, email.indexOf("@"));

  const history = useNavigate();
  const [data, setData] = useState({
    name: "",
    image: "",
    type: "",
    price: "",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleCancel = () => {
    props.func();
  };

  const handleSubmitUpload = async () => {
    try {
      handleCancel();
      let currentDate = Date.now();
      let duration = 604800000;
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("owner", owner);
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
        setData({
          name: "",
          owner: "",
          type: "",
          image: "",
          price: "",
        });
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
    props.func2();
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
            <TextField margin="normal" fullWidth id="owner" disabled label={owner} name="owner" placeholder="Owner" />
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
              <Box
                sx={{
                  mt: 1,
                  ml: 20,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <button className="btn btn-primary" onClick={handleSubmitUpload}>
                  Submit
                </button>
              </Box>
              <IconButton
                aria-label="close"
                onClick={handleCancel}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export { AddProduct, ButtonForm, UpdateProduct };
