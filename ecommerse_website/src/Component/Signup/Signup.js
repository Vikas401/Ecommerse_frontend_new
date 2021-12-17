import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import Layout from "../Layout/Layout";
import Input from "../UI/Input/input";

export default function Signup() {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input
                      label="First Name"
                      placeholder="First Name"
                      type="text"
                      value=""
                      onChange={() => {}}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Last Name"
                      placeholder="Last Name"
                      type="text"
                      value=""
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Input
                  label="Email"
                  placeholder="Email"
                  type="email"
                  value=""
                  onChange={() => {}}
                />
                <Input
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value=""
                  onChange={() => {}}
                />
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
