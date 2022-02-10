import React from "react";
import styled from "styled-components";
import { fourK, mobil } from "../responsive";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://raw.githubusercontent.com/CAndrei1601/eCommerce-React/main/img/wallpaperbetter.webp");
  background-size: cover;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 8vh;
  text-align: center;
  color: white;
  font-weight: 700;
  font-family: "Roboto";
  ${fourK({ marginTop: "4vh" })}
`;
const Image = styled.img`
  width: 60%;
  ${mobil({ width: "80%" })}
  ${fourK({ width: "90%" })}
`;

const Span = styled.span`
  color: #d49903;
`;

const Constuction = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          PAGE UNDER <Span>CONSTRUCTION</Span>
        </Title>
        <Image src="https://raw.githubusercontent.com/CAndrei1601/eCommerce-React/main/img/pngwing.com%20(1).webp" />
      </Wrapper>
    </Container>
  );
};

export default Constuction;
