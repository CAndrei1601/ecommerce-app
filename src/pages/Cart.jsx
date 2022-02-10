import React from "react";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobil } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobil({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 700;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled"
      ? "black"
      : "transparent"}; //if it's selected  bg color:black if not bg-color:transaprent
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobil({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobil({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid gray;
  border-radius: 10px;
  padding: 10px;
  height: 50vh;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobil({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img``;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProductName = styled.span``;
const ProductId = styled.span`
  margin-top: 10px;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-top: 10px;
`;
const ProductSize = styled.span`
  margin-top: 10px;
w`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobil({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 32px;
  ${mobil({ marginBottom: "20px" })}
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "700"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryTitle = styled.h1``;
const SummaryButton = styled.div`
  width: 80%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
  max-width: 200px;
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (1)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Check Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://raw.githubusercontent.com/CAndrei1601/eCommerce-React/main/img/Leather-Jacket-PNG-Pic.webp" />
                <Details>
                  <ProductName>
                    <b>Product</b> Jacket
                  </ProductName>
                  <ProductId>ID:44040243</ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>100$</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://raw.githubusercontent.com/CAndrei1601/eCommerce-React/main/img/pngegg%20(2).webp" />
                <Details>
                  <ProductName>
                    <b>Product</b> T-shirt
                  </ProductName>
                  <ProductId>ID:44040300</ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> S
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>10$</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://raw.githubusercontent.com/CAndrei1601/eCommerce-React/main/img/pngegg%20(3).webp" />
                <Details>
                  <ProductName>
                    <b>Product</b> Suit
                  </ProductName>
                  <ProductId>ID:44040243</ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>900$</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>TOTAL</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Link to="/Construction">
              <SummaryButton>Check Out</SummaryButton>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
