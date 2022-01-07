import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  FormDevice,
  FormMessageSuccess,
  FormMessageError,
  WrapperDevice,
  Title,
} from "./device-styles";
import {
  createDevice,
  fetchDeviceById,
  updateDevice,
} from "../../state/action-creators/device";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DeviceForm from "./DeviceForm";

const Device = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { device, successMessage, errorMessage } = useSelector(
    (state) => state.deviceReducer
  );

  const onSubmit = ({ id, systemName, type, hddCapacity }) => {
    if (systemName === "") {
      alert("System Name field is required");
      return false;
    }
    if (type === "") {
      alert("Type field Name is required");
      return false;
    }
    if (hddCapacity === "") {
      alert("Hdd Capacity field is Name required");
      return false;
    }

    if (id) {
      dispatch(
        updateDevice({
          id,
          system_name: systemName,
          type,
          hdd_capacity: hddCapacity,
        })
      );
    } else {
      dispatch(
        createDevice({
          system_name: systemName,
          type,
          hdd_capacity: hddCapacity,
        })
      );
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchDeviceById(id));
    }
  }, [id, dispatch]);

  return (
    <WrapperDevice>
      <FormDevice>
        <Title>{device && device.id ? "Edit" : "Add"} Device</Title>
        {successMessage && (
          <FormMessageSuccess>{successMessage}</FormMessageSuccess>
        )}
        {errorMessage && <FormMessageError>{errorMessage}</FormMessageError>}
        <DeviceForm
          onSubmit={onSubmit}
          device={device}
          successMessage={successMessage}
        />
      </FormDevice>
    </WrapperDevice>
  );
};

export default Device;
