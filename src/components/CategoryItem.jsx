import React from "react";
import styled from "styled-components";
import { mobil } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 0 auto;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobil({ height: "40vh" })}
`;
const Info = styled.p`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 4rem;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 400;
`;
export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to="/ProductList">
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};
