import React from "react";
import { Announcement } from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobil } from "../responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  ${mobil({ marginRight: "0px", display: "flex", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 70%;
  height: 90vh;
  object-fit: cover;
  ${mobil({ height: "40vh", width: "100%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobil({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
`;

const Desc = styled.div`
  margin: 20px 0px;
  font-size: 20px;
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 400;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  padding: 0px 50px;
  ${mobil({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobil({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
  border: 1px solid teal;
`;
const Button = styled.button`
  padding: 15px;
  border: 1.5px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 700;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://raw.githubusercontent.com/CAndrei1601/eCommerce-React/main/img/pexels-linneas-bolandgodbey-10978529.webp" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim outfit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            accusantium corrupti aliquam natus in nisi. <br /> Voluptatem
            voluptates dolores harum, id optio fugiat aliquid ex atque ad error
            iusto debitis eligendi.
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="gray" />
              <FilterColor color="blue" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
