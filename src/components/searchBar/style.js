import styled from 'styled-components';
import { Input } from 'antd';

import media from '../media';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const InputX = styled(Input)`
  flex: 0 0 60%;
  
  &:focus,&:hover{
    border-color: #00d1b2;
  }
  &:focus{
    box-shadow: 0 0 0 2px rgba(0, 209, 178,.2);
  }
  
  
  }

  ${media.desktop`
  flex : 0 0 70%
  `}

  ${media.tablet`
  flex : 0 0 75%
  `}

  ${media.mobile`
  flex: 0 0 100%
  `}
`;
