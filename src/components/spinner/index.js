import React from 'react';
import { Spin } from 'antd';

import { SpinContainer } from './style';

const Spinner = ({ size, pt }) => (
  <SpinContainer pt={pt}>
    <Spin size={size} />
  </SpinContainer>
);
export default Spinner;
