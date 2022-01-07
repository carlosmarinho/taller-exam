import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { fetchAllDeviceTypes } from "../../state/action-creators/deviceType";

const BarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  background-color: lightblue;
  border: 1px solid cccccc;
`;

const FormColumn = styled.div`
  margin-right: 20px;
  padding: 10px;

  label {
    margin-right: 10px;
  }

  input {
    height: 25px;
  }

  select {
    height: 30px;
  }
`;

export default function FilterBar({ type, systemName, changeSearch }) {
  const { types } = useSelector((state) => state.deviceTypesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDeviceTypes());
  }, [dispatch]);

  return (
    <BarContainer>
      <FormColumn>
        <label>Type *</label>
        <select
          type="text"
          name="type"
          value={type}
          onChange={(e) => changeSearch({ type: e.target.value, systemName })}
        >
          <option value="">Select Type</option>
          {types && types.map((type) => <option key={type}>{type}</option>)}
        </select>
      </FormColumn>
      <FormColumn>
        <label>System Name *</label>
        <input
          type="text"
          name="systemName"
          value={systemName}
          onChange={(e) => changeSearch({ systemName: e.target.value, type })}
        />
      </FormColumn>
    </BarContainer>
  );
}
