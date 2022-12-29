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
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log("success");
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function EnterBid(prop) {
  const cookie = new Cookies();
  const email = cookie.get("email");
  console.log(email);
  let bid = prop.bid;
  let pid = prop.pid;
  console.log(pid);
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
      console.log(JSON.stringify(response.data));
      console.log("success");
      result = JSON.stringify(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function AddFavList(props) {
  //[name, type, owner, image, price, duration, start_date];
  let pid = props[0];
  const cookie = new Cookies();
  const email = cookie.get("email");
  console.log(email);
  let uri = serverURI + "/users/favList/" + email;
  var data = JSON.stringify({
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
      console.log(JSON.stringify(response.data));
      console.log("success");
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function DeleteFavList(prop) {
  let pid = prop[0];
  const cookie = new Cookies();
  const email = cookie.get("email");
  let uri = serverURI + "/users/deletefavList/" + email + "+" + pid;
  var config = {
    method: "put",
    url: uri,
    headers: {
      "Content-Type": "application/json",
    },
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


async function GetCertificate(prop) {
  let pid = prop.certificate;
  console.log(pid);

  let uri = serverURI + "/products/getCertificate/" + pid;
  let result = {};

  var config = {
    method: "post",
    url: uri,
    headers: {
      "Content-Type": "application/json",
    },
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      result = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    return result;
}

export { DeleteServiceProduct, EnterBid, GetCertificate, AddFavList, DeleteFavList };