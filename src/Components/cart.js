import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import secondsToDhms from '../Utils/countDown';
import serverURI from "../Constants/connection";
import { DeleteServiceProduct } from '../Service/ProductService';

export default function ProductCard(props) {
  const id = props.id;
  const type = props.type || 'test';
  const name = props.name || 'test';
  const owner = props.owner || 'test';
  const image =
    props.image ||
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/49808757050946de8bedae29011926b5_9366/Manchester_United_22-23_Home_Jersey_Red_H13881_21_model.jpg';
  const price = props.price;
  const duration = Number(props.duration) / 1000;
  const start_date = Number(props.start_date) / 1000;
  const currentDate = Math.floor(Date.now() / 1000);
  const remainingTime = duration - (currentDate - start_date);
  const [currentRemaningTime, setRemainingTime] = React.useState(remainingTime);
  const admin = props.admin;

  function func3() {
    props.func(id);
    
  }

  const handleDeleteProduct = async () => {
    //navigate(`/products/delete`);
    try {
      let productid = id;

      // const path = serverURI +"/product/delete/" + productid;




      DeleteServiceProduct(productid);

    } catch (error) {

    }

  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const size = props.size;
  let size1 = {};

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  size === 1
    ? (size1 = {
        maxWidth: 300,
        imgHeight: '220',
        name: 'h6',
        itemType: 'h10',
        variant: 'h10',
        displayChip: 'none',
      })
    : (size1 = {
        maxWidth: 300,
        imgHeight: '300',
        name: 'h5',
        itemType: 'h9',
        variant: 'h9',
        displayChip: 'flex',
      });

  return (
    <Card sx={{ maxWidth: size1.maxWidth, position: 'relative' }}>
      <CardActionArea onClick={handleClick}>
        <Box
          sx={{
            display: size1.displayChip,
            alignContent: 'space-between',
            position: 'absolute',
            bottom: '29%',
            left: '5%',
          }}
        >
          <Chip
            icon={<AccessTimeIcon />}
            color="primary"
            label={`${secondsToDhms(currentRemaningTime)} Bid: $${price}`}
          />
        </Box>
        <CardMedia
          component="img"
          height={size1.imgHeight}
          src={image}
          alt="Paella dish"
        />
        <CardContent>
          <Box>
            <Typography
              variant={size1.name}
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              {name}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={size1.itemType}
              color="text.primary"
              sx={{ fontWeight: 500 }}
            >
              {type}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={size1.variant}
              color="text.primary"
              sx={{ fontWeight: 500 }}
            >
              {owner}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <Box sx={{ zIndex: 1 }}>
        {admin ? <Button onClick={func3}>Update</Button> : ''}
        {admin ? <Button onClick={handleDeleteProduct}>Delete</Button> : ''}
      </Box>
    </Card>
  );
}
