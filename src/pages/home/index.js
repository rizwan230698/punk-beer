import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'antd';

import { BeerContext } from '../../context/beerProvider';
import Spinner from '../../components/spinner';
import BeerCard from '../../components/beerCard.js';

const Home = () => {
  const { beers, loading, fetchBeers } = useContext(BeerContext);

  useEffect(() => {
    fetchBeers();
  }, []);

  if (loading || beers.length === 0) {
    return <Spinner size="large" />;
  }

  return (
    <Row gutter={[16, 16]}>
      {beers.map((beer) => (
        <Col lg={8} md={8} sm={12} xs={12} key={beer.id}>
          <BeerCard beer={beer} />
        </Col>
      ))}
    </Row>
  );
};

export default Home;
