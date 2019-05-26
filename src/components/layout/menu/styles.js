import styled from "styled-components";

export const BurguerIcon = styled.div`
  display: block;
  margin: auto 20px auto 0;
  height: fit-content;
`;

export const Menu = styled.ul`
  position: absolute;
  z-index: 10;
  padding: 0px 0px 0px 20px;
  border-radius: 15px;

  left: -20px;
  top: 62px;
  background: ${props => props.theme.primaryColor};
  height: fit-content;
`;

export const Icon = styled.li`
  padding: 10px 30px 10px 10px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  transition: 0.2s;
  display: flex;

  .texto {
    overflow: hidden;
    margin: auto 0;
    color: white;
  }

  img {
    width: 32px;
    height: 32px;
    padding: 0 15px 0 0;
    display: block;
  }

  :nth-child(1) {
    border-top: none;
    border-radius: 0 15px 0 0;
  }

  :last-child {
    border-bottom: none;
    border-radius: 0 0 15px 0;
  }
`;
