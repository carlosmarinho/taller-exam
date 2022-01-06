import {
  FETCH_ALL_DEVICES,
  FETCH_ALL_DEVICES_SUCCESS,
  FETCH_ALL_DEVICES_ERROR,
  CREATE_DEVICE,
  CREATE_DEVICE_SUCCESS,
  CREATE_DEVICE_ERROR,
} from "../action-types";

const initialState = {
  devices: [],
  device: null,
  success: null,
  successMessage: null,
  errorMessage: null,
  error: null,
  loading: false,
};

const devicesReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DEVICES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_DEVICES_SUCCESS:
      return {
        ...state,
        devices: action.payload,
        loading: false,
      };
    case FETCH_ALL_DEVICES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case CREATE_DEVICE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_DEVICE_SUCCESS:
      return {
        ...state,
        device: action.payload,
        successMessage: "Device created!",
        loading: false,
      };
    case CREATE_DEVICE_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default devicesReducers;
