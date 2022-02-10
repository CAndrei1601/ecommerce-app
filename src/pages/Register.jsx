import styled from "styled-components";
import React from "react";
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
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder=" last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />

          <Input placeholder="confirm password" />
          <br />
          <Link to="/Construction">
            <Button>CREATE</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
