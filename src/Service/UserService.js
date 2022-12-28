import axios from "axios";
import serverURI from "../Constants/connection";

async function DeleteService(props) {
  let { email } = props[0];
  let uri = serverURI + "/users/delete";

  var data = JSON.stringify({
    email: email,
  });
  console.log(email);

  var config = {
    method: "delete",
    url: uri,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log("success");
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function UpdateService(props) {
  let newPassword = props[0];
  let oldPassword = props[1];
  let { email } = props[2];
  let uri = serverURI + "/users/update";

  var data = JSON.stringify({
    newpassword: newPassword,
    oldpassword: oldPassword,
    email: email,
  });
  console.log(data);

  var config = {
    method: "put",
    url: uri,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log("success");
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function SigninService(props) {
  let uri = serverURI + "/users/signin";
  let email = props[0];
  let password = props[1];
  let result = {};
  var data = JSON.stringify({
    email: email,
    password: password,
  });

  var config = {
    method: "post",
    url: uri,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(response);

      result = response.data;
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });
  return result;
}

async function SignupService(props) {
  let uri = serverURI + "/users/signup";
  let userEmail = props[2];
  let userName = props[0];
  let userLastname = props[1];
  let userPassword = props[3];
  console.log(props[0], userPassword);
  var data = JSON.stringify({
    name: userName,
    lastname: userLastname,
    email: userEmail,
    password: userPassword,
  });
  console.log(data);

  var config = {
    method: "post",
    url: uri,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log("success");
    })
    .catch(function (error) {
      console.log(error);
    });
}

export { DeleteService, UpdateService, SigninService, SignupService };
