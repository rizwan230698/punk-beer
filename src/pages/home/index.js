import React, { useContext, useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

import { BeerContext } from '../../context/beerProvider';
import Spinner from '../../components/spinner';
import BeerCard from '../../components/beerCard';
import SearchBar from '../../components/searchBar';
import { Container } from './style';

const Home = () => {
  const [query, setQuery] = useState('');
  const {
    state,
    loading,
    fetchBeers,
    fetchBeersByName,
    resetBeersState,
  } = useContext(BeerContext);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query === '') {
      fetchBeers();
    }
  }, [query]);

  useEffect(() => {
    if (query !== '') {
      var cancel;
      axios
        .get(`https://api.punkapi.com/v2/beers?page=1&per_page=20`, {
          params: {
            beer_name: query,
          },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        .then((res) => fetchBeersByName(res.data))
        .catch((e) => {
          if (axios.isCancel(e)) return;
        });
    }
    return () => cancel && cancel();
  }, [query]);

  useEffect(() => {
    resetBeersState();
  }, [query]);

  return (
    <Container>
      <SearchBar handleInputChange={handleInputChange} value={query} />
      {!loading && state.beers.length !== 0 ? (
        <Row gutter={[16, 16]}>
          {state.beers.map((beer) => (
            <Col lg={8} md={8} sm={12} xs={12} key={beer.id}>
              <BeerCard beer={beer} />
            </Col>
          ))}
        </Row>
      ) : (
        <Spinner size="large" />
      )}
    </Container>
  );
};

export default Home;
