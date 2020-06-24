import React from 'react';
import { Spin } from 'antd';

import { SpinContainer } from './style';

const Spinner = ({ size }) => (
  <SpinContainer>
    <Spin size={size} />
  </SpinContainer>
);
export default Spinner;
