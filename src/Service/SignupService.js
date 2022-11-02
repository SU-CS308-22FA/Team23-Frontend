import axios, * as others from "axios";

export default async function SignupService(props) {
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
    url: "http://localhost:3000/users/signup",
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
