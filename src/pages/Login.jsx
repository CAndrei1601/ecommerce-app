import React from "react";
import styled from "styled-components";
import { mobil } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://raw.githubusercontent.com/CAndrei1601/eCommerce-React/main/img/pexels-artem-beliaikin-1036856.webp");
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 20%;
  background-color: white;
  border-radius: 5px;
  ${mobil({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 20%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LinkOne = styled.a`
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Link to="/Construction">
            <Button>LOG IN</Button>
          </Link>
          <LinkOne>Forget password ?</LinkOne>
          <LinkOne>Create New Account</LinkOne>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
