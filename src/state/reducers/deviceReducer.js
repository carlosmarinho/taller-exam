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
        success: null,
        error: null,
        device: null,
        successMessage: "",
        errorMessage: "",
      };
    case FETCH_ALL_DEVICES_SUCCESS:
      return {
        ...state,
        devices: action.payload,
        success: true,
        loading: false,
      };
    case FETCH_ALL_DEVICES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case FETCH_DEVICE:
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case FETCH_DEVICE_SUCCESS:
      return {
        ...state,
        device: action.payload,
        success: true,
        error: null,
        loading: false,
      };
    case FETCH_DEVICE_ERROR:
      return {
        ...state,
        error: action.payload,
        success: null,
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
    case UPDATE_DEVICE:
      return {
        ...state,
        loading: true,
        successMessage: "",
        errorMessage: "",
      };
    case UPDATE_DEVICE_SUCCESS:
      return {
        ...state,
        device: action.payload,
        successMessage: `Device '${action.payload.system_name}' updated!`,
        loading: false,
      };
    case UPDATE_DEVICE_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };
    case DELETE_DEVICE:
      return {
        ...state,
        loading: true,
        successMessage: "",
        errorMessage: "",
      };
    case DELETE_DEVICE_SUCCESS:
      return {
        ...state,
        devices: state.devices.filter((device) => device.id !== action.payload),
        successMessage: `Device successfully removed!`,
        loading: false,
      };
    case DELETE_DEVICE_ERROR:
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
