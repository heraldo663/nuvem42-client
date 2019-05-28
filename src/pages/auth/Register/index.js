import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

const schema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string()
    .email("Email invalido")
    .required("Campo obrigatorio"),
  password: Yup.string()
    .min(4)
    .required()
});

function Register(props) {
  function handleSubmit(data) {
    console.log(props, "props");
    console.log(data);
  }

  return (
    <div>
      <h2>Register</h2>

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="email" />
        <Input name="password" type="password" />

        <button type="submit">Sign in</button>
      </Form>
    </div>
  );
}

export default Register;
