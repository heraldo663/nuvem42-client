import React, { useState } from "react";
import {LoginPage , LoginBox, LoginImg, LoginH1, LoginForm, LoginInput, LoginButton, LoginCheck, Teste1} from './styles';
// import Undraw from 'react-undraw';
import { ReactComponent as Logo } from './ilustracao.svg';
import { NavLink } from 'react-router-dom';
   

function Login() {

  const [unout,  setInput ] = useState({
    email: '',
    senha: ''
  });


  function handeEmail(e){
    console.log(e)
    setInput({
      email: e.target.value
    });
  }

  return (
    <LoginPage>
      <LoginImg >
        <Logo />
      </LoginImg>
      <LoginBox>
        <LoginH1>Login</LoginH1>
        <LoginForm>
          <LoginInput 
            type="text"
            placeholder="E-mail"
            onChange={handeEmail}
          />
          <LoginInput 
            type="text"
            placeholder="Senha"
          />
          <LoginCheck>
            <input type="checkbox" name="remember" value="true" /> <span>Lembrar-se</span>
          </LoginCheck> 
          <LoginButton>
            Entrar
          </LoginButton>
          {unout.email}
        </LoginForm>
      </LoginBox>
      {/* <NavLink to="/register" activeClassName="is-active" exact={true}>Registrar</NavLink> */}
    </LoginPage>
  );
}

export default Login;
