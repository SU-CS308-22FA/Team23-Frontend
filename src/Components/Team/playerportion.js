import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useParams } from 'react-router-dom';
import serverURI from '../../Constants/connection';
import { Typography } from '@mui/material';
import { Container, Box } from '@mui/system';

const PlayerPortion = () => {
  const [chartData, setChartData] = useState(null);
  const params = useParams();
  const email = params.id;

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await axios.get(
          `${serverURI}/teams/salesstatistics/${email}`
        );
        setChartData(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchChartData();
  }, []);

  return (
    <Container>
    <Box><Typography sx={{fontWeight: 700, my:3}  } variant= "h4">Player Statistics</Typography></Box>
    <BarChart width={1000} height={600} data={chartData}>
      <Bar dataKey="totalPrice" fill="#1876d2" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
    </Container>
  );
};

export default PlayerPortion;
