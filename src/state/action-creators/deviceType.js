import _ from "lodash";
import api from "../../api";
import {
  FETCH_ALL_DEVICE_TYPES,
  FETCH_ALL_DEVICE_TYPES_SUCCESS,
  FETCH_ALL_DEVICE_TYPES_ERROR,
} from "../action-types";

export const fetchAllDeviceTypes = () => async (dispatch) => {
  dispatch({
    type: FETCH_ALL_DEVICE_TYPES,
  });

  try {
    const response = await api.get(`/devices`);
    const types = _.uniqBy(response.data, (type) => type.type).map(
      (type) => type.type
    );

    dispatch({
      type: FETCH_ALL_DEVICE_TYPES_SUCCESS,
      payload: types,
    });
  } catch (e) {
    dispatch({
      type: FETCH_ALL_DEVICE_TYPES_ERROR,
      payload: "Erro no fetchAllDevices: ",
    });
  }
};
