import styled from "styled-components";

export const DeviceContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  flex-wrap: wrap;
  margin-top: 40px;
  padding: 0;
`;

export const DeviceNotFound = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid yellow;

  p {
    font-size: 20px;
    color: red;
  }
`;
