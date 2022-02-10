import { ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  border-radius: 15px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 10px;
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
