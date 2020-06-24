import React from 'react';
import { Layout } from 'antd';

import { HeaderX, Logo, OptionLink, ContentX, FooterX } from './style';

const LayoutComponent = ({ children }) => (
  <Layout>
    <HeaderX>
      <Logo to="/">Beans Love Beers</Logo>
      <OptionLink to="/">Home</OptionLink>
      <OptionLink to="/favourite">Favourite</OptionLink>
    </HeaderX>
    <ContentX>{children}</ContentX>
    <FooterX style={{ textAlign: 'center' }}>
      Punk Beer ©2020 Created by Rizwan Anwar
    </FooterX>
  </Layout>
);

export default LayoutComponent;
