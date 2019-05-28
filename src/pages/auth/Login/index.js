import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { connect } from "react-redux";
import { Creators as LoginActions } from "../../../store/ducks/auth/login";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Email invalido")
    .required("Campo obrigatorio"),
  password: Yup.string()
    .min(4)
    .required()
});

function Login(props) {
  function handleSubmit(data) {
    console.log(data);
    console.log(props);
  }

  return (
    <div>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="email" />
        <Input name="password" type="password" />

        <button type="submit">Sign in</button>
      </Form>
    </div>
  );
}

const mapStateToProps = state => ({
  loginData: state.login
});

const mapDispatchToProps = { LoginActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
