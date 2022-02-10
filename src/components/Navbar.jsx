import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { mobil } from "../responsive";
import { Link } from "react-router-dom";

import Badge from "@mui/material/Badge";

const Container = styled.div`
  height: 60px;
  ${mobil({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobil({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobil({ flex: "2", justifyContent: "center" })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobil({ display: "none" })}
`;

const SearchContainer = styled.span`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  paadding: 5px;
`;

const Inputs = styled.input`
  border: none;
  ${mobil({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobil({ fontSize: "24px" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobil({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Inputs placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "20px" }}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>GILBAR</Logo>
        </Center>
        <Right>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <MenuItem>Home</MenuItem>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Register"
          >
            <MenuItem>Register</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/Login">
            <MenuItem>Sign In</MenuItem>
          </Link>
          <MenuItem>
            <Link to="/Cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
