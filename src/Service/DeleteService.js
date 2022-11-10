import axios, * as others from "axios";
import serverURI from "../Constants/connection";

export default async function ProfileService(props) {
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
