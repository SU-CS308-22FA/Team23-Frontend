import axios, * as others from "axios";

export default async function ProfileService(props) {
  let newPassword = props[0];
  let oldPassword = props[1];
  let { email } = props[2];

  var data = JSON.stringify({
    newpassword: newPassword,
    oldpassword: oldPassword,
    email: email,
  });
  console.log(data);

  var config = {
    method: "put",
    url: "http://localhost:3000/users/update",
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
