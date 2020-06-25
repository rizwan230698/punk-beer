import React, { useContext } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';

import { AuthContext } from '../../context/authProvider';
import { HeaderX, Logo, OptionLink, ContentX, FooterX } from './style';

const LayoutComponent = ({ children, history }) => {
  const { currentUser, removeUser } = useContext(AuthContext);

  const handleClick = () => {
    history.push('/favourite');
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <HeaderX>
        <Logo to="/">Beans Love Beers</Logo>
        <OptionLink to="/">Home</OptionLink>
        <OptionLink as="div" onClick={handleClick}>
          Favourite
        </OptionLink>
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

export default withRouter(LayoutComponent);
