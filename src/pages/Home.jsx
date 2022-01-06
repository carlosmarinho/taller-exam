import React from "react";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
`;

const HomePage = () => {
  return (
    <>
      <Title>Meu Dashboard</Title>
      <Home />
    </>
  );
};

export default HomePage;
