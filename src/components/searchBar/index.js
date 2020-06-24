import React from 'react';

import { Container, InputX } from './style';

const SearchBar = ({ handleInputChange, value }) => (
  <Container>
    <InputX
      placeholder="Search beer by name"
      onChange={handleInputChange}
      value={value}
    />
  </Container>
);

export default SearchBar;
