import React, { useContext } from 'react';
import { Layout } from 'antd';

import { AuthContext } from '../../context/authProvider';
import { HeaderX, Logo, OptionLink, ContentX, FooterX } from './style';

const LayoutComponent = ({ children }) => {
  const { currentUser, removeUser } = useContext(AuthContext);

  return (
    <Layout>
      <HeaderX>
        <Logo to="/">Beans Love Beers</Logo>
        <OptionLink to="/">Home</OptionLink>
        <OptionLink to="/favourite">Favourite</OptionLink>
        {currentUser && (
          <OptionLink as="div" onClick={removeUser}>
            Logout
          </OptionLink>
        )}
      </HeaderX>
      <ContentX>{children}</ContentX>
      <FooterX style={{ textAlign: 'center' }}>
        Punk Beer ©2020 Created by Rizwan Anwar
      </FooterX>
    </Layout>
  );
};

export default LayoutComponent;
