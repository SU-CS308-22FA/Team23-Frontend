import axios from 'axios';
import serverURI from '../Constants/connection';

async function NewBidServiceBid(
  productId,
  useremail,
  newprice,
  oldprice,
  currentDate
) {
  alert('BID SERVICE IS WORKING!!!');
  let uri = 'http://localhost:3000/product/newbid';
  var data = {
    productId: productId,
    useremail: useremail,
    newprice: newprice,
    oldprice: oldprice,
    currentDate: currentDate,
  };
  var enterNewBid = {
    method: 'NEWBID',
    url: uri,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  axios(enterNewBid)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log('success');
    })
    .catch(function (error) {
      console.log(error);
    });
}
export { NewBidServiceBid };
