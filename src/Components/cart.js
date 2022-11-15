import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { grey } from '@mui/material/colors';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const size = props.size;
  let size1 = {};

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  size === 1 ? size1 = {
    maxWidth: 300,
    imgHeight: "220",
    name: "h6",
    itemType: "h10",
    variant: "h10",
    displayChip: "none"
  } : size1 = {
    maxWidth: 300,
    imgHeight: "300",
    name: "h5",
    itemType: "h9",
    variant: "h9",
    displayChip: "flex"
  }

  return (
    <Card sx={{ maxWidth: size1.maxWidth ,position: 'relative'}}>
      <Box sx={{ display: size1.displayChip, alignContent: 'space-between', position: 'absolute', bottom: '29%',
          left: '5%',}}>
          <Chip icon={<AccessTimeIcon/>} color='primary' label="23:23:23 Bid:$5,000"  />
          </Box>
      <CardMedia
        component="img"
        height={size1.imgHeight}
        src='https://assets.adidas.com/images/w_600,f_auto,q_auto/49808757050946de8bedae29011926b5_9366/Manchester_United_22-23_Home_Jersey_Red_H13881_21_model.jpg'
        alt="Paella dish"
      />
      <CardContent>
          <Box>
          <Typography variant={size1.name} color="text.primary" sx={{ fontWeight: 700 }}>
          Arda Güler
        </Typography>
          </Box>
          <Box>
          <Typography variant={size1.itemType} color="text.primary" sx={{ fontWeight: 500}}>
          Forma
        </Typography>
          </Box>
          <Box>
          <Typography variant={size1.variant} color="text.primary" sx={{ fontWeight: 500 }}>
          Fenerbahçe
        </Typography>
          </Box>
      </CardContent>

    </Card>
  );
}
