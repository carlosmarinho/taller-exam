import api from "../../api";
import {
  FETCH_ALL_DEVICES,
  FETCH_ALL_DEVICES_SUCCESS,
  FETCH_ALL_DEVICES_ERROR,
  FETCH_DEVICE,
  FETCH_DEVICE_SUCCESS,
  FETCH_DEVICE_ERROR,
  CREATE_DEVICE,
  CREATE_DEVICE_SUCCESS,
  CREATE_DEVICE_ERROR,
  UPDATE_DEVICE,
  UPDATE_DEVICE_SUCCESS,
  UPDATE_DEVICE_ERROR,
  DELETE_DEVICE,
  DELETE_DEVICE_SUCCESS,
  DELETE_DEVICE_ERROR,
} from "../action-types";

export const fetchDeviceById = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_DEVICE,
  });

  try {
    const response = await api.get(`/devices/${id}`);
    dispatch({
      type: FETCH_DEVICE_SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (e) {
    dispatch({
      type: FETCH_DEVICE_ERROR,
      payload: "Erro no fetchAllDevices: ",
    });
  }
};

export const fetchAllDevices = (search) => async (dispatch) => {
  dispatch({
    type: FETCH_ALL_DEVICES,
  });

  try {
    const response = await api.get(`/devices`);
    dispatch({
      type: FETCH_ALL_DEVICES_SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (e) {
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

export const updateDevice = (device) => async (dispatch) => {
  dispatch({
    type: UPDATE_DEVICE,
  });

  try {
    const response = await api.put(`/devices/${device.id}`, device);
    dispatch({
      type: UPDATE_DEVICE_SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_DEVICE_ERROR,
      payload: "Error updating Device",
    });
  }
};

export const removeDevice = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_DEVICE,
  });

  try {
    await api.delete(`/devices/${id}`);
    dispatch({
      type: DELETE_DEVICE_SUCCESS,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: DELETE_DEVICE_ERROR,
      payload: "Error deletingDevice",
    });
  }
};

/*@todo implement if endpoint is ready do be used */
// export const fetchAllDevicesBySearch = (search) => async (dispatch) => {
//   dispatch({
//     type: FETCH_ALL_DEVICES,
//   });

//   try {
//     const response = await api.get(`/devices`);

//     let searched = response.data || null;
//     if (searched && search.type) {
//       searched = searched.filter((device) => device.type === search.type);
//     } else if (searched && search.systemName) {
//       // searched = searched.filter((device) =>
//       //   device.system_name.includes(search.systemName)
//       // );
//     }

//     dispatch({
//       type: FETCH_ALL_DEVICES_SUCCESS,
//       payload: searched,
//     });
//   } catch (e) {
//     dispatch({
//       type: FETCH_ALL_DEVICES_ERROR,
//       payload: "Erro no fetchAllDevices: ",
//     });
//   }
// };
