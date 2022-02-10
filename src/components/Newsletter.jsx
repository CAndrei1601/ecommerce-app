import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { mobil } from "../responsive";

const Container = styled.div`
  display: flex;
  height: 60vh;
  background-color: #fcf5f5;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
  ${mobil({ fontSize: "40px" })}
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
  ${mobil({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobil({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Additional content and promotions following</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
