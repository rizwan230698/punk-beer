import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 34px;
  color: #09c3ff;
  margin-bottom: 0;
  font-family: 'Dancing Script', cursive;
  padding: 0 10px;
`;

export const Logo = styled.img`
  height: 100px;
  width: 100px;
  -weblit-shape-outside: circle(50% at 50% 50%);
  shape-outside: circle(50% at 50% 50%);
`;

export const GoogleButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 40px;
  padding: 0 30px;
  font-size: 15px;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  display: flex;
  justify-content: center;
  background-color: #4285f4;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #3571e8;
    border: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
