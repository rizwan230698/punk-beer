import styled from 'styled-components';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import media from '../media';

const { Header, Content, Footer } = Layout;

export const HeaderX = styled(Header)`
  background-color: #00d1b2;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  color: white;

  @media (max-width: 1100px) {
    padding: 10px 30px;
  }

  ${media.mobile`
  padding: 10px 24px;
  `}
`;

export const Logo = styled(Link)`
  margin-right: auto;
  margin-bottom: 0;
  color: #fff;
  font-size: 28px;
  font-weight: 300;

  ${media.mobile`
  font-size: 20px;
  font-family: 'Dancing Script', cursive;
  font-weight: 500;
  `}
`;

export const OptionLink = styled(Link)`
  padding: 0 10px;
  cursor: pointer;

  ${media.mobile`
  padding: 0 4px;
  `}
`;

export const ContentX = styled(Content)`
  background-color: #fff;
  min-height: calc(100vh - 139px);
  padding: 24px 50px;

  @media (max-width: 1100px) {
    padding: 24px 30px;
    min-height: calc(100vh - 156px);
  }

  ${media.mobile`
  padding: 24px;
  `}
`;

export const FooterX = styled(Footer)`
  background-color: #fff;
`;
