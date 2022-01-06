import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  FormDevice,
  FormRow,
  ButtonsBar,
  Button,
  FormMessageSuccess,
} from "./device-styles";
import { createDevice } from "../state/action-creators";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Device = () => {
  const [systemName, setSystemName] = useState("");
  const [type, setType] = useState("");
  const [hddCapacity, setHddCapacity] = useState("");

  const dispatch = useDispatch();
  const { device, successMessage, errorMessage } = useSelector(
    (state) => state.deviceReducer
  );

  const onSubmit = () => {
    console.log(systemName, type, hddCapacity);
    if (systemName === "") {
      alert("System Name required");
      return false;
    }
    if (type === "") {
      alert("System Name required");
      return false;
    }
    if (hddCapacity === "") {
      alert("System Name required");
      return false;
    }

    dispatch(
      createDevice({ system_name: systemName, type, hdd_capacity: hddCapacity })
    );
  };

  useEffect(() => {
    if (successMessage) {
      setSystemName("");
      setType("");
      setHddCapacity("");
    }
  }, [successMessage]);

  return (
    <>
      <FormDevice>
        <FormMessageSuccess>{successMessage}</FormMessageSuccess>
        <form>
          <FormRow>
            <label>System Name *</label>
            <input
              type="text"
              name="systemName"
              value={systemName}
              onChange={(e) => setSystemName(e.target.value)}
            />
          </FormRow>
          <FormRow>
            <label>Type *</label>
            <input
              type="text"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </FormRow>
          <FormRow>
            <label>HDD Capacity *</label>
            <input
              type="text"
              name="hdd_capacity"
              value={hddCapacity}
              onChange={(e) => setHddCapacity(e.target.value)}
            />
          </FormRow>
          <ButtonsBar>
            <Button save={true} onClick={() => onSubmit()}>
              Add
            </Button>
            <Link to="/">
              <Button>Back</Button>
            </Link>
          </ButtonsBar>
        </form>
      </FormDevice>
    </>
  );
};

export default Device;
