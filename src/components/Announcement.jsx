import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 5vh;
  background-color: #485461a2;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
`;

export const Announcement = () => {
  return (
    <div>
      <Container>Best Deal! Free shiping Over $100</Container>
    </div>
  );
};
