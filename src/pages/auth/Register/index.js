import React from "react";
import { Form, Icon, Input, Button, Card, Col, Row, Checkbox } from "antd";

import { connect } from "react-redux";
import { Creators as RegisterActions } from "../../../store/ducks/auth/register";

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
      <Col lg={12} xs={24} md={22}>
        <Card title="Login">
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

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                disabled={hasErrors(getFieldsError())}
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
  registerData: state.register
});

const mapDispatchToProps = { RegisterActions };

export default Form.create({ name: "Register" })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
