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

async function AddressService(props) {
  let address = props[0];
  let city = props[1];
  let country = props[2];
  let zip = props[3];
  let { email } = props[4];
  let result = {};
  let uri = serverURI + "/users/address";

  var data = JSON.stringify({
    address: address,
    city: city,
    country: country,
    zip: zip,
    email: email,
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

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log("success");
      result = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return result;
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

async function CardSelectionService(prop) {
  let card = prop[0];
  let address = prop[1];
  let pid = prop[2];

  console.log(card);

  var data = JSON.stringify({
    conversationId: card.conversationId,
    userId: card.userId,
    email: card.email,
    cardUserKey: card.cardUserKey,
    cardToken: card.cardToken,
    cardHolderName: card.cardHolderName,
    cardNumber: card.cardNumber,
    lastFourDigits: card.lastFourDigits,
    cvv: card.cvv,
    expMonth: card.expMonth,
    expYear: card.expYear,
    cardType: card.cardType,
    cardAssociation: card.cardAssociation,
    cardFamily: card.cardFamily,
    cardBankName: card.cardBankName,
    address: address.address,
    country: address.country,
    city: address.city,
    zip: address.zip,
    pid: pid,
  });

  let uri = serverURI + "/users/payProduct";
  var config = {
    method: "post",
    url: uri,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  let result = {};
  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log("success");
      result = response.data;
    })
    .catch(function (error) {
      console.log(error);
      result = {}
    });
  return result;
}

async function AddCreditCard(props) {
  //[name, type, owner, image, price, duration, start_date];
  let cardNumber = props.cardNumber;
  console.log(props);
  let cvv = props.cvv;
  let name = props.name;
  let expDate = props.expDate;
  let email = props.email;
  console.log(email, cardNumber, cvv, name);
  let uri = serverURI + "/users/creditCard/" + email;
  var data = JSON.stringify({
    cardNumber: cardNumber,
    cvv: cvv,
    name: name,
    expDate: expDate,
  });
  var config = {
    method: "post",
    url: uri,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  let result = {};

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

export {
  DeleteService,
  UpdateService,
  SigninService,
  SignupService,
  AddCreditCard,
  CardSelectionService,
  AddressService,
};
