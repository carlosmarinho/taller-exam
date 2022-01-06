import api from "../../api";
import {
  FETCH_ALL_DEVICES,
  FETCH_ALL_DEVICES_SUCCESS,
  FETCH_ALL_DEVICES_ERROR,
  CREATE_DEVICE,
  CREATE_DEVICE_SUCCESS,
  CREATE_DEVICE_ERROR,
} from "../action-types";

export const fetchAllDevices = (search) => async (dispatch) => {
  dispatch({
    type: FETCH_ALL_DEVICES,
  });

  try {
    const response = await api.get(`/devices?search=${search}`);
    dispatch({
      type: FETCH_ALL_DEVICES_SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (e) {
    // console.log("\n\n***\n errrorrrrr: ", e, "\n***\n");
    dispatch({
      type: FETCH_ALL_DEVICES_ERROR,
      payload: "Erro no fetchAllDevices: ",
    });
  }
};

export const createDevice = (device) => async (dispatch) => {
  dispatch({
    type: CREATE_DEVICE,
  });

  try {
    const response = await api.post(`/devices`, device);
    dispatch({
      type: CREATE_DEVICE_SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (e) {
    dispatch({
      type: CREATE_DEVICE_ERROR,
      payload: "Error creating Device",
    });
  }
};
