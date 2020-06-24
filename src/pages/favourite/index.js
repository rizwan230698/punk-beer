import React, { useContext } from 'react';
import { Row, Col } from 'antd';

import { BeerContext } from '../../context/beerProvider';
import BeerCard from '../../components/beerCard';
import Empty from '../../components/Empty';

const Favourite = () => {
  const {
    state: { favouriteBeers },
  } = useContext(BeerContext);

  if (favouriteBeers.length === 0) {
    return <Empty />;
  }

  return (
    <Row gutter={[16, 16]}>
      {favouriteBeers.map((beer) => (
        <Col lg={8} md={12} sm={12} xs={24} key={beer.id}>
          <BeerCard beer={beer} />
        </Col>
      ))}
    </Row>
  );
};

export default Favourite;
