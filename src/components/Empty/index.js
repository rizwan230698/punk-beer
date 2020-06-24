import React from 'react';
import { Empty as AntdEmpty } from 'antd';

import { EmptyContainer } from './style';

const Empty = () => (
  <EmptyContainer>
    <AntdEmpty description="No favourite beer found." />
  </EmptyContainer>
);

export default Empty;
