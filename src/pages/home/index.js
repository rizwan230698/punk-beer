import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

import { BeerContext } from '../../context/beerProvider';
import Spinner from '../../components/spinner';
import BeerCard from '../../components/beerCard';
import SearchBar from '../../components/searchBar';
import beerApi from '../../api/beer';
import { Container } from './style';

const Home = () => {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const {
    state,
    loading,
    hasMore,
    setHasMore,
    setLoading,
    fetchBeers,
    fetchBeersByName,
    resetBeersState,
  } = useContext(BeerContext);

  const observer = useRef();
  const lastBeerCardRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          //Only call api if user reached lastBeerCard and hasMore is true(more data to fetch)
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  useEffect(() => {
    if (query === '') {
      fetchBeers(pageNumber);
    }
  }, [query, pageNumber]);

  useEffect(() => {
    if (query !== '') {
      var cancel;
      setLoading(true);
      beerApi
        .get(`/beers?page=${pageNumber}&per_page=20&beer_name=${query}`, {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        .then((res) => {
          //set hasMore to true if current response array is not empty
          setHasMore(res.data.length > 0);
          fetchBeersByName(res.data);
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
        });
    }
    return () => cancel && cancel();
  }, [query, pageNumber]);

  useEffect(() => {
    //set Beers state to [] from every search
    resetBeersState();
  }, [query]);

  return (
    <Container>
      <SearchBar handleInputChange={handleInputChange} value={query} />
      {state.beers.length !== 0 ? (
        <Row gutter={[16, 16]}>
          {state.beers.map((beer, i) => (
            <Col lg={8} md={8} sm={12} xs={12} key={beer.id}>
              {state.beers.length === i + 1 ? (
                <BeerCard beer={beer} ref={lastBeerCardRef} />
              ) : (
                <BeerCard beer={beer} />
              )}
            </Col>
          ))}
        </Row>
      ) : (
        <Spinner size="large" />
      )}
      {loading && state.beers.length !== 0 && <Spinner size="large" />}
    </Container>
  );
};

export default Home;
