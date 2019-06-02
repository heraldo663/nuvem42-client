import React from "react";
import { Form, Icon, Input, Button, Card, Col, Row, Checkbox } from "antd";

import { connect } from "react-redux";
import { Creators as LoginActions } from "../../../store/ducks/auth/login";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function Login(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
  } = props.form;
  const usernameError = isFieldTouched("username") && getFieldError("username");
  const passwordError = isFieldTouched("password") && getFieldError("password");

  return (
    <Row gutter={16} align="middle" justify="center" type="flex">
      <Col lg={8} xs={24} md={22} style={{ maxWidth: "400px" }}>
        <Card title="Login" style={{ borderRadius: "7px" }}>
          <Form layout="vertical" onSubmit={handleSubmit}>
            <Form.Item
              validateStatus={usernameError ? "error" : ""}
              help={usernameError || ""}
            >
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item
              validateStatus={passwordError ? "error" : ""}
              help={passwordError || ""}
            >
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item className="rememberMe">
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Lembrar-se</Checkbox>)}
            </Form.Item>
            <Form.Item>
              <a className="login-form-forgot" href="">
                Esqueci minha senha
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                disabled={hasErrors(getFieldsError())}
                style={{
                  background: "#E7FE8D",
                  color: "black",
                  border: "none"
                }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

const mapStateToProps = state => ({
  loginData: state.login
});

const mapDispatchToProps = { LoginActions };

export default Form.create({ name: "login" })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
