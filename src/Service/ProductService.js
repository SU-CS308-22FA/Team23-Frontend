import axios from "axios";
import serverURI from '../Constants/connection';

async function DeleteServiceProduct(prop) {
  let _id = prop;
  let uri = serverURI + '/products/delete/' + _id;
  //let uri = "http://localhost:3001/deleteProduct";

  var data = JSON.stringify({
    _id: _id,
  });

  var config = {
    method: 'delete',
    url: uri,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log('success');
    })
    .catch(function (error) {
      console.log(error);
    });
}
export { DeleteServiceProduct };
