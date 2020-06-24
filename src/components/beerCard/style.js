import styled from 'styled-components';
import { Card } from 'antd';

export const CardX = styled(Card)`
  position: relative;
  & > .ant-card-body {
    display: flex;
    padding-top: 34px;

    & > span {
      position: absolute;
      right: 14px;
      top: 4px;
      font-size: 16px;
      color: #00d1b2;
      cursor: pointer;
      padding: 10px;
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 0 0 35%;
`;

export const Image = styled.img`
  height: 240px;
  width: 100px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
