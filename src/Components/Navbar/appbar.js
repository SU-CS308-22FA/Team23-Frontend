import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import SearchBar from "./searchBar";
import serverURI from "../../Constants/connection";

const themeLight = createTheme();
//   {
//   palette: {
//     background: {
//       default: "#e4f0e2",
//     },
//     primary: {
//       main: "#C6D7D7",
//     },
//   },
// }

const pages = ["Teams", "Open Auctions"];
const settings = ["Profile", "Logout"];

function ResponsiveAppBar(props) {
  const cookie = new Cookies();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [logedIn, setLogedIn] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [email, setEmail] = React.useState(cookie.get("email"));

  const navigate = useNavigate();

  useEffect(() => {
    let uri = serverURI + "/users/team/";
    const email = cookie.get("email");

    var config = {
      method: "get",
      url: uri + email,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        setIsAdmin(response.data.message.res);
      })
      .catch((error) => {
        setIsAdmin(false);
      });
  });

  if (isAdmin === false) {
    if (settings.includes("Active Bids") === false) {
      settings.push("Active Bids");
    } else if (settings.includes("Favorite Auctions") === false) {
      settings.push("Favorite Auctions");
    }
  } else {
    if (settings.includes("Active Bids") === true) {
      settings.pop("Active Bids");
    } else if (settings.includes("Favorite Auctions") === true) {
      settings.pop("Favorite Auctions");
    }
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogOut = () => {
    setAnchorElUser(null);
    setLogedIn(false);
    setIsAdmin(false);
    cookie.remove("email", { path: "/" });
    navigate("/");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleAdmin = () => {
    navigate(`/team/${email}`);
  };

  const handleActiveBids = () => {
    navigate(`/activebids/${email}`);
  };

  const handleFavoriteAuction = () => {
    navigate(`/favoriteauctions/${email}`);
  };

  const settingsFunctions = [
    handleProfile,
    handleLogOut,
    handleActiveBids,
    handleFavoriteAuction,
  ];

  React.useEffect(() => {
    if (email !== undefined) {
      setLogedIn(true);
      console.log(email);
    } else {
      setLogedIn(false);
    }
  }, [email]);

  return (
    <ThemeProvider theme={themeLight}>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MAÇTAN
            </Typography>

            {/* xs dropdown menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MAÇTAN
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex", flexGrow: 1 } }}>
              <SearchBar></SearchBar>
            </Box>

            {isAdmin ? (
              <Box sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}>
                <Button variant="contained" onClick={handleAdmin}>
                  Admin
                </Button>
              </Box>
            ) : (
              ""
            )}

            <>
              {logedIn ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt={email} src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting, indx) => (
                      <MenuItem key={setting} onClick={settingsFunctions[indx]}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button variant="contained" onClick={handleSignIn}>
                  Sign in
                </Button>
              )}
            </>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
