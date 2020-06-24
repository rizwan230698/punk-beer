import styled from 'styled-components';
import { Card } from 'antd';

import media from '../media';

export const CardX = styled(Card)`
  position: relative;
  height: 100%;
  & > .ant-card-body {
    display: flex;
    padding-top: 34px;

    @media (max-width: 1070px) {
      flex-direction: column;
      align-items: center;
    }

    ${media.desktop`
    flex-direction: row;
      align-items: unset;
    `}

    @media (max-width: 740px) {
      flex-direction: column;
      align-items: center;
    }

    ${media.mobile`
    flex-direction: row;
      align-items: unset;
    `}

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
  padding-right: 24px;

  @media (max-width: 1070px) {
    padding-right: 0px;
    padding-bottom: 24px;
  }

  ${media.desktop`
  padding-right: 24px;
  padding-bottom: 0px;
  `}

  @media (max-width: 740px) {
    padding-right: 0px;
    padding-bottom: 24px;
  }

  ${media.mobile`
  padding-right: 24px;
  padding-bottom: 0px;
  `}
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
  font-size: 14.5px;
  font-weight: 500;
  margin-bottom: 8px;
`;
export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
