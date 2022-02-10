import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { mobil } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobil({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobil({ justifyContent: "center" })}
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobil({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobil({ backgroundColor: "#bebebebc" })}
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 20%;
  ${mobil({ width: "50%" })}
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>GILBAR</Logo>
        <Desc>You can find on</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Terms</ListItem>
          <ListItem>CopyRight </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MapIcon style={{ marginRight: "10px" }} />
          Bld 1 Decembrie , Cluj-Napoca , Romania
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} /> +40755 120 005
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} />
          contact@gilbar.com
        </ContactItem>
        <ContactItem>
          <Payment src="https://raw.githubusercontent.com/CAndrei1601/eCommerce-React/main/img/pngwing.com.webp" />
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
