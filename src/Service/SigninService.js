import axios, * as others from "axios";

async function SigninService(props) {
  let email = props[0];
  let password = props[1];
  let result = {};
  var data = JSON.stringify({
    email: email,
    password: password,
  });

  var config = {
    method: "post",
    url: "http://localhost:3000/users/signin",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(response);

      result = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return result;
}

export default SigninService;
