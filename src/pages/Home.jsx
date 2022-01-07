import React from "react";
import Home from "../components/Home";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
`;

const HomePage = () => {
  return (
    <>
      <Title>Dashboard</Title>
      <Home />
    </>
  );
};

export default HomePage;
