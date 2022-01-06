import React from "react";
import Device from "../components/Device";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
`;
const DevicePage = () => {
  return (
    <>
      <Title>Add Device</Title>
      <Device />
    </>
  );
};

export default DevicePage;
