import styled from "styled-components";

export const BackgroundH = styled.div`
  background: ${props => props.theme.primaryColor};
  height: 60px;
  display: flex;
  padding: 0 0 0 25px;
`;

export const Title = styled.h3`
  font-size: 30px;
  color: white;
  margin: auto 0;
`;

export const BackgroundF = styled.div`
  background: ${props => props.theme.primaryColor};
  height: 60px;
  bottom: 0px;
  width: 100%;
  display: flex;
  flex-shrink: 0;
`;

export const Sign = styled.div`
  color: white;
  font-size: 14px;
  height: fit-content;
  width: fit-content;
  margin: auto;
`;
