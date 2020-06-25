import React from 'react';
import { Empty as AntdEmpty } from 'antd';

import BeerImage from '../../asests/beer.png';
import { EmptyContainer } from './style';

const Empty = () => (
  <EmptyContainer>
    <AntdEmpty description="No favourite beer found." image={BeerImage} />
  </EmptyContainer>
);

export default Empty;
