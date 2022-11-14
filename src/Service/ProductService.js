import axios, * as others from "axios";
import serverURI from "../Constants/connection";

async function UploadService(props) {
  let uri = serverURI + "/products/upload";

  let type = props[0];
  let name = props[1];
  let owner = props[2];

  var data = JSON.stringify({
    type: type,
    name: name,
    owner: owner,
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

export { UploadService };
