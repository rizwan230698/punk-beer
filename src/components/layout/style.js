import styled from 'styled-components';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export const HeaderX = styled(Header)`
  background-color: #00d1b2;
  padding: 10px 50px;
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  margin-right: auto;
  margin-bottom: 0;
  color: #fff;
  font-size: 28px;
  font-weight: 300;
`;

export const OptionLink = styled(Link)`
  padding: 0 10px;
`;

export const ContentX = styled(Content)`
  background-color: #fff;
  padding: 0 50px;
  min-height: calc(100vh - 139px);
  padding: 24px 50px;
`;

export const FooterX = styled(Footer)`
  background-color: #fff;
`;
