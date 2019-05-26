import styled from 'styled-components';

export const LoginPage = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 75px 20px;
  box-sizing: border-box;
  box-shadow: none;
  position: relative;
  margin: 0 auto 127px;
  overflow: hidden;
  display: flex;
  flex: 1 0 auto;

  @media(max-width: 650px) {
    margin: 0 auto;
    padding: 18px 20px 45px;
  }
`;

export const LoginBox = styled.div`
  width: 100%;
  max-width: 378px;
  height: 410px;
  margin: 130px 0 0 auto;
  padding: 21px 40px;
  background: yellow;
  border-radius: 8px;
  box-sizing: border-box;
  background: ${props => props.theme.primaryColor};
  position: relative;

  @media(max-width: 980px) {
    margin: 130px auto 0 auto;
  }
`;

export const LoginImg = styled.div`
  position: absolute;
  left: 0px;
  top: 200px;
  overflow: hidden;
  z-index: -1;

  @media(max-width: 980px) {

    right: 0;
    margin: 0 auto;
    top: -86px;
    width: 40%;
    min-width: 283px;

    svg {
      width: 100%;
    }
  }

  @media(max-width: 650px) {
    top: -145px;
  }
`;

export const LoginH1 = styled.h1`
  text-align:center;
  font-size: 36px;
  font-family: 'Ubuntu';
  margin: 10px 0 40px 0;
  color: white;
`;

export const LoginForm = styled.form`
  width: 100%;
  display:block;
`;


export const LoginInput = styled.input`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  padding-right: 0;
  margin-bottom: 25px;
  border-radius: 5px;
  font-weight: bold;
  color: black;
  line-height: 20px;
  border: none;
`;

export const LoginCheck = styled.div`
  margin: 0 auto;
  width: fit-content;
  font-family: Ubunto;
  font-size: 14px;
  margin-bottom: 20px;
  color: white;
  font-family: 'Ubuntu';
  padding-bottom: 5px;
  display: flex;

  span {
    padding: 2px 0 0 13px;
    display: block;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  border: none;
  background: #E7FE8D;
`;


/////////////////////////////

export const Teste1 = styled.div`
  width:100%;
  height: 300px;
  background: red;

`;