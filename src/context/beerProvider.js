import React, { useReducer, useState } from 'react';

import beersApi from '../api/beer';

export const BeerContext = React.createContext();

const beerReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_BEERS':
      return {
        ...state,
        beers: [...state.beers, ...action.payload],
      };
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favourites: { ...state.favourites, [action.payload.id]: true },
        favouriteBeers: [...state.favouriteBeers, action.payload],
      };
    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        favourites: { ...state.favourites, [action.payload.id]: false },
        favouriteBeers: state.favouriteBeers.filter(
          (beer) => beer.id !== action.payload.id
        ),
      };
    case 'RESET_BEERS_STATE':
      return {
        ...state,
        beers: [],
      };
    default:
      return state;
  }
};

export const BeerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(beerReducer, {
    favourites: {},
    beers: [],
    favouriteBeers: [],
  });
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const fetchBeers = async (pageNumber = 1) => {
    setLoading(true);
    const response = await beersApi.get(
      `/beers?page=${pageNumber}&per_page=20`
    );
    //set hasMore to true if current response array is not empty
    setHasMore(response.data.length > 0);
    dispatch({ type: 'FETCH_BEERS', payload: response.data });
    setLoading(false);
  };

  const fetchBeersByName = (data) => {
    dispatch({ type: 'FETCH_BEERS', payload: data });
    setLoading(false);
  };

  const addToFavourite = (beer) => {
    dispatch({ type: 'ADD_TO_FAVOURITE', payload: beer });
  };

  const removeFromFavourite = (beer) => {
    dispatch({ type: 'REMOVE_FROM_FAVOURITE', payload: beer });
  };

  const resetBeersState = () => dispatch({ type: 'RESET_BEERS_STATE' });

  return (
    <BeerContext.Provider
      value={{
        state,
        loading,
        hasMore,
        setHasMore,
        setLoading,
        fetchBeers,
        addToFavourite,
        removeFromFavourite,
        fetchBeersByName,
        resetBeersState,
      }}
    >
      {children}
    </BeerContext.Provider>
  );
};
