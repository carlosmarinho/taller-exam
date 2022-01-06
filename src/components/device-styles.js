import styled from "styled-components";

export const FormDevice = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 500px;
  width: 60%;
  background-color: #ffffff;
  margin-bottom: 30px;
  color: #000;
  border: 1px solid #cccccc;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: stretch;
  width: 100%;
`;

export const ButtonsBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;

export const Button = styled.div`
  width: 150px;
  background-color: ${(p) => (p.save ? "blue" : "")};
  color: ${(p) => (p.save ? "#ffffff" : "#000000")};
  padding: 10px;
  text-align: center;
  border: 1px solid #cccccc;
  margin-right: 20px;
`;

export const FormMessageSuccess = styled.div`
  width: 100%;
  color: blue;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const FormMessageError = styled.div`
  width: 100%;
  color: error;
`;
