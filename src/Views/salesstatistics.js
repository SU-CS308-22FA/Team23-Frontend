import * as React from 'react';
import { useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '../Components/Navbar/appbar';
import PlayerPortion from '../Components/Team/playerportion';
import Footer from '../Components/Navbar/footer';
import { Divider } from '@mui/material';
import serverURI from '../Constants/connection';
import ListClosedCardsTeam from '../Components/Card/teamsClosedProducts';
import DateRangePicker from "../Components/Calendar/dateRangePicker";
const theme = createTheme();

export default function SalesStatistics() {
  const [showFormUpdate, setshowFormUpdate] = React.useState(false);
  const [showFormUpload, setshowFormUpload] = React.useState(false);
  const [uploadChange, setUploadChange] = React.useState(false);
  const [myOption, setOption] = React.useState(0);
  const [myid, setId] = React.useState('');

  function isShowFormUpdate(data) {
    if (showFormUpdate === false) {
      setshowFormUpdate(true);
      setId(data);
    }
    if (showFormUpdate === true) {
      setshowFormUpdate(false);
      setId(data);
    }
  }
  const { id } = useParams();
  const sort = id + '-' + myOption;
  console.log(id);
  let uri = serverURI + `/products/team/closed/${sort}`;

  return (
    <div>
      <AppBar />
      <Divider></Divider>
      <PlayerPortion></PlayerPortion>
      <Divider></Divider>
      <ListClosedCardsTeam
        email={id}
        adminPage={true}
        uri={uri}
        func={isShowFormUpdate}
      ></ListClosedCardsTeam>
      <Footer></Footer>
    </div>
  );
}

//export default SalesStatistics;
