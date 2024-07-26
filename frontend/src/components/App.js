import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Chart from './Chart';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/data');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <h1 className="mt-4">Interactive Data Dashboard</h1>
        <Chart data={data} />
      </Container>
    </div>
  );
};

export default App;
