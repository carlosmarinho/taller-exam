import styled from "styled-components";

export const WrapperDevice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
`;

export const FormDevice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  min-width: 420px;
  background-color: #ffffff;
  margin-bottom: 30px;
  /* padding-top: 40px; */
  color: #000;
  border: 1px solid yellow;
`;

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  align-content: center;
  /* margin-top: 20px; */
  padding-bottom: 20px;
  padding-top: 20px;
  margin: 0px;
  margin-bottom: 30px;

  border-bottom: 1px solid yellow;
  width: 100%;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 360px;
  margin-bottom: 10px;
  align-items: center;

  input {
    height: 25px;
    width: 162px;
  }

  select {
    height: 35px;
    width: 170px;
  }
`;

export const ButtonsBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const Button = styled.div`
  width: 130px;
  background-color: ${(p) => (p.save ? "blue" : "")};
  color: ${(p) => (p.save ? "#ffffff" : "#000000")};
  padding: 10px;
  text-align: center;
  border: 1px solid #cccccc;
  cursor: pointer;
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
  color: red;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
`;
