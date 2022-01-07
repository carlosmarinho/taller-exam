import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeDevice } from "../../state/action-creators/device";
import {
  CardDevice,
  CardItem,
  NameDevice,
  OperationSystem,
  HdCapacity,
  CardActions,
} from "./device-item-styles";

const DeviceItem = ({ id, system_name, type, hdd_capacity }) => {
  const dispatch = useDispatch();
  return (
    <CardDevice>
      <CardItem>
        <NameDevice>
          <Link to={`/device/${id}`}>{system_name}</Link>
        </NameDevice>
        <OperationSystem>{type}</OperationSystem>
        <HdCapacity>{hdd_capacity}</HdCapacity>
      </CardItem>

      <CardActions onClick={() => dispatch(removeDevice(id))}>X</CardActions>
    </CardDevice>
  );
};

export default DeviceItem;
