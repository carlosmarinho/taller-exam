import {
  FETCH_ALL_DEVICE_TYPES,
  FETCH_ALL_DEVICE_TYPES_SUCCESS,
  FETCH_ALL_DEVICE_TYPES_ERROR,
} from "../action-types";

const initialState = {
  types: [],
  success: null,
  error: null,
  loading: false,
};

const deviceTypesReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DEVICE_TYPES:
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case FETCH_ALL_DEVICE_TYPES_SUCCESS:
      return {
        ...state,
        types: action.payload,
        success: true,
        loading: false,
      };
    case FETCH_ALL_DEVICE_TYPES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default deviceTypesReducers;
