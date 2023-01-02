import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import {
  Box,
  Grid,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Typography,
  Paper,
  InputAdornment,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UpdateService, DeleteService, AddressService } from "../../Service/UserService";
import serverURI from "../../Constants/connection";
import { Container } from "@mui/system";

const theme = createTheme();

export default function ProfileMenu(props) {
  let selected;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState({});
  const [countries, setCountries] = useState([{ name: { common: "Turkey" } }]);
  const cookie = new Cookies();
  cookie.get("email");
  const email = cookie.cookies.email;
  let uri = serverURI + "/users/profile/";

  const [values, setValues] = React.useState({
    oldPassword: "",
    newPassword: "",

    oldShowPassword: false,
    newShowPassword: false,
  });

  const [addressValues, setAddressValues] = React.useState({
    address: "",
    city: "",
    country: "",
    zip: "",
  });

  const handleAddressChange = (prop) => (event) => {
    setAddressValues({ ...addressValues, [prop]: event.target.value });
    console.log(addressValues);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickOldShowPassword = () => {
    setValues({
      ...values,
      oldShowPassword: !values.oldShowPassword,
    });
  };

  const handleClickNewShowPassword = () => {
    setValues({
      ...values,
      newShowPassword: !values.newShowPassword,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let newPassword = data.get("newPassword");
    let oldPassword = data.get("oldPassword");
    const obj = [newPassword, oldPassword, user];

    UpdateService(obj).then((response) => {
      console.log(response, "asdasdasd");
    });
  };

  const handleAddressSubmit = (event) => {
    event.preventDefault();
    let address = addressValues.address;
    let city = addressValues.city;
    let country = addressValues.country;
    let zip = addressValues.zip;

    const obj = [address, city, country, zip, user];
    console.log(obj);

    AddressService(obj).then((response) => {
      console.log(response, "asdasdasd");
    });
  };

  const handleLogout = (event) => {
    event.preventDefault();
    navigate("/signin");
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const obj = [user];
    DeleteService(obj).then((response) => {
      console.log(response);
    });
    navigate("/signin");
  };
  useEffect(() => {
    const email = cookie.get("email");
    var data = JSON.stringify({
      email: email,
    });
    var config = {
      method: "get",
      url: uri + email,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        setUser(response.data.message[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        setUser(error);
      });
  }, []);

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://restcountries.com/v3.1/all",
      headers: {
        "Content-Type": "application/json",
      },
      data: "",
    };

    axios(config)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <div> Loading ... </div>;
  }
  if (props.menu === 0) {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box sx={{ width: "50%" }}>
            <Grid item xs={12} sm={8} md={5} elevation={6}>
              {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square> */}
              <Box
                sx={{
                  mb: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <FaceIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  {user.name} {user.lastname}
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    size="small"
                    margin="normal"
                    fullWidth
                    disabled
                    id="outlined-disabled-name"
                    label={user.name} //current user name
                    name="name"
                    autoFocus
                  />

                  <TextField
                    size="small"
                    margin="normal"
                    fullWidth
                    disabled
                    id="outlined-disabled-lastname"
                    name="lastname"
                    label={user.lastname}
                    type="lastname"
                  />
                  <TextField
                    size="small"
                    margin="normal"
                    fullWidth
                    disabled
                    id="outlined-disabled-email"
                    name="email"
                    label={user.email}
                    type="email"
                  />

                  <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
                    <FormControl sx={{ m: 1, width: "45%", mt: 3 }} variant="outlined">
                      <InputLabel style={{ textAlign: "left" }} htmlFor="outlined-adornment-password">
                        Old Password
                      </InputLabel>
                      <OutlinedInput
                        name="oldPassword"
                        id="old_password"
                        type={values.oldShowPassword ? "text" : "password"}
                        value={values.oldPassword}
                        onChange={handleChange("oldPassword")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickOldShowPassword}
                              edge="end"
                            >
                              {values.oldShowPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Old Password"
                      />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "45%", mt: 3 }} variant="outlined">
                      <InputLabel style={{ textAlign: "left" }} htmlFor="outlined-adornment-password">
                        New Password
                      </InputLabel>
                      <OutlinedInput
                        name="newPassword"
                        id="new_password"
                        type={values.newShowPassword ? "text" : "password"}
                        value={values.newPassword}
                        onChange={handleChange("newPassword")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickNewShowPassword}
                              edge="end"
                            >
                              {values.newShowPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Old Password"
                      />
                    </FormControl>
                  </Grid>

                  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 1 }}>
                    Update Profile
                  </Button>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box component="form" noValidate onSubmit={handleDelete} sx={{ mt: 1 }}>
                      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }} color="error">
                        Delete Profile
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box component="form" noValidate onSubmit={handleLogout} sx={{ mt: 1 }}>
                      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }} color="primary">
                        Logout
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    );
  } else if (props.menu === 1) {
    return "bill";
  } else if (props.menu === 2) {
    return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ mx: 9, my: 4 }}>
          <div>
            <Typography sx={{ ml: 1.5 }}>Address</Typography>
            <TextField
              name="address"
              onChange={handleAddressChange("address")}
              size="small"
              id="outlined-textarea"
              placeholder="Address"
              multiline
            />
          </div>
          <div>
            <Typography sx={{ ml: 1.5 }}>City</Typography>
            <TextField name="city" onChange={handleAddressChange("city")} size="small" placeholder="City"></TextField>
          </div>
          <div>
            <Typography sx={{ ml: 1.5 }}>Country</Typography>
            <TextField
              name="country"
              onChange={handleAddressChange("country")}
              size="small"
              placeholder="Country"
            ></TextField>
          </div>
          {/* <div>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selected}
                label="Age"
                onChange={handleChange}
              >
                {countries.map((country, idx) => {
                  console.log(country.name.common);
                  return <MenuItem value={idx}>{country.name.common}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div> */}
          <div>
            <Typography sx={{ ml: 1.5 }}>ZIP Code</Typography>
            <TextField name="zip" onChange={handleAddressChange("zip")} size="small" placeholder="ZIP Code"></TextField>
          </div>
          <Button onClick={handleAddressSubmit} sx={{ mt: 3, mb: 1, ml: 1 }}>
            Add Address
          </Button>
        </Box>
      </Box>
    );
  }
}
