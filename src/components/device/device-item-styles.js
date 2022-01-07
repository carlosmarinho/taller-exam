import styled from "styled-components";

export const CardDevice = styled.li`
  border: 1px solid yellow;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
  list-style-type: none;
  color: #000;
  width: 100%;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: top; */
  flex-direction: column;
  margin-bottom: 10px;
  list-style-type: none;
  color: #000;
  height: 100%;
  width: 92%;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  cursor: pointer;
  height: 100%;
  width: 8%;
`;

export const NameDevice = styled.h3`
  size: 17px;

  a {
    color: #000000;
  }
  margin: 15px;
`;

export const OperationSystem = styled.p`
  margin: 10px;
`;

export const HdCapacity = styled.p`
  size: 17px;
  margin: 10px;
`;
