import React from "react";
import {
  CardDevice,
  NameDevice,
  OperationSystem,
  HdCapacity,
} from "./device-list-styles";

const DeviceList = ({ system_name, type, hdd_capacity }) => {
  return (
    <>
      <CardDevice>
        <NameDevice>{system_name}</NameDevice>
        <OperationSystem>{type}</OperationSystem>
        <HdCapacity>{hdd_capacity}</HdCapacity>
      </CardDevice>
    </>
  );
};

export default DeviceList;
