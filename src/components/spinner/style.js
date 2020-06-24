import Styled from 'styled-components';

export const SpinContainer = Styled.div`
  padding: 80px 0px;
  padding-top:${({ pt }) => (pt ? `${pt}px` : '80px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
