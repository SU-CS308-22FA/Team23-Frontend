import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UploadService } from "../Service/ProductService";

const theme = createTheme();

export default function Upload() {
  const handle = (event) => {
    event.preventDefault();
    //call update function from product servive
    const data = new FormData(event.currentTarget);
    let type = data.get("type");
    let name = data.get("name");
    let owner = data.get("owner");
    const obj = [type, name, owner];
    let result;

    UploadService(obj)
      .then((response) => {
        result = response;
        console.log(response.data);
      })
      .catch((err) => {
        result = err;
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Upload
          </Typography>
          <Box component="form" onSubmit={handle} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="type"
              label="Type"
              name="type"
              autoComplete="type"
              autoFocus
              className="login-box"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              className="login-box"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="owner"
              label="Owner"
              name="owner"
              autoComplete="owner"
              autoFocus
              className="login-box"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Upload
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// import React from "react";
// import { UploadService } from "../Service/ProductService";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// function Button({ handleLoginClick }) {
//   const handleClick = () => {
//     handleLoginClick();
//   };
//   return (
//     <div className="button">
//       <div>
//         <span onClick={handleClick} className="uploadicon">
//           Upload
//         </span>
//       </div>
//     </div>
//   );
// }

// const handle = (event) => {
//   event.preventDefault();
//   //call update function from product servive
//   const data = new FormData(event.currentTarget);
//   let type = data.get("type");
//   let name = data.get("name");
//   let owner = data.get("owner");
//   const obj = [type, name, owner];
//   let result;

//   UploadService(obj)
//     .then((response) => {
//       result = response;
//       console.log(result);
//     })
//     .catch((err) => {
//       result = err;
//       console.log(err);
//     });
// };

// const LoginForm = ({ isShowLogin }) => {
//   return (
//     <div className={`${isShowLogin ? "active" : ""} show`}>
//       <div className="login-form">
//         <div className="form-box solid">
//           <Box component="form" onSubmit={handle} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="type"
//               label="Type"
//               name="type"
//               autoComplete="type"
//               autoFocus
//               className="login-box"
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="name"
//               label="Name"
//               name="name"
//               autoComplete="name"
//               autoFocus
//               className="login-box"
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="owner"
//               label="Owner"
//               name="owner"
//               autoComplete="owner"
//               autoFocus
//               className="login-box"
//             />
//           </Box>
//           <button onClick={handle} className="login-btn">
//             Upload
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { Button, LoginForm };
