import axios, * as others from "axios";

export default async function ProfileService(props) {
  let { email } = props[0];

  var data = JSON.stringify({
    email: email,
  });
  console.log(email);

  var config = {
    method: "delete",
    url: "https://test23her.herokuapp.com/users/delete",
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
