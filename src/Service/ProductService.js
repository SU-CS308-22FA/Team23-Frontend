import axios from "axios";
import serverURI from "../Constants/connection";
import Cookies from "universal-cookie";

async function DeleteServiceProduct(prop) {
  let _id = prop;
  let uri = serverURI + "/products/delete/" + _id;
  var data = JSON.stringify({
    _id: _id,
  });

  var config = {
    method: "delete",
    url: uri,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    });
}

async function EnterBid(prop) {
  const cookie = new Cookies();
  const email = cookie.get("email");

  let bid = prop.bid;
  let pid = prop.pid;

  let result = {};
  let uri = serverURI + "/products/enterBid/";
  //let uri = "http://localhost:3001/deleteProduct";

  var data = JSON.stringify({
    email: email,
    bid: bid,
    pid: pid,
  });

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
      result = JSON.stringify(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export { DeleteServiceProduct, EnterBid };
