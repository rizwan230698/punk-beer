import React, { useReducer, useState } from 'react';

import beersApi from '../api/beer';

export const BeerContext = React.createContext();

const beerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BEERS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const BeerProvider = ({ children }) => {
  const [beers, dispatch] = useReducer(beerReducer, []);
  const [loading, setLoading] = useState(false);

  const fetchBeers = async (page = 1) => {
    setLoading(true);
    const response = await beersApi.get(`/beers?page=${page}&per_page=20`);
    setLoading(false);
    dispatch({ type: 'ADD_BEERS', payload: response.data });
  };

  return (
    <BeerContext.Provider value={{ beers, loading, fetchBeers }}>
      {children}
    </BeerContext.Provider>
  );
};
