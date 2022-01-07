import React, { useEffect, useState } from "react";
import { FormRow, ButtonsBar, Button } from "./device-styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DeviceForm = ({ onSubmit, device, successMessage }) => {
  const [systemName, setSystemName] = useState("");
  const [type, setType] = useState("");
  const [hddCapacity, setHddCapacity] = useState("");
  const typeDevice = device && device.id ? "edit" : "create";

  const { types } = useSelector((state) => state.deviceTypesReducer);

  useEffect(() => {
    if (device && device.id) {
      setSystemName(device.system_name);
      setType(device.type);
      setHddCapacity(device.hdd_capacity);
    }
  }, [device, successMessage]);

  return (
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
        <select
          type="text"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Select Type</option>
          {types && types.map((type) => <option key={type}>{type}</option>)}
        </select>
      </FormRow>
      <FormRow>
        <label>HDD Capacity (GB) *</label>
        <input
          type="text"
          name="hdd_capacity"
          value={hddCapacity}
          onChange={(e) => setHddCapacity(e.target.value)}
        />
      </FormRow>
      <ButtonsBar>
        <Button
          save={true}
          onClick={() =>
            onSubmit({
              id: device ? device.id : null,
              systemName,
              type,
              hddCapacity,
            })
          }
        >
          {typeDevice === "create" ? "Add" : "Edit"}
        </Button>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </ButtonsBar>
    </form>
  );
};

export default DeviceForm;
