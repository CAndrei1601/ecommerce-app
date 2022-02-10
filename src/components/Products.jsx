import React from "react";
import { popularProduct } from "../data";
import styled from "styled-components";
import Product from "./Product";
import { mobil } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #d3d3d3;
  ${mobil({ height: "auto" })}
`;

const Products = () => {
  return (
    <Container>
      {popularProduct.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
