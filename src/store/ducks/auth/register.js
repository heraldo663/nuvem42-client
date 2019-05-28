/**
 * Types
 */

export const Types = {
  ADD_REQUEST: "Register/ADD_REQUEST",
  ADD_SUCCESS: "Register/ADD_SUCCESS",
  ADD_FAILURE: "Register/ADD_FAILURE"
};

/**
 * Reducers
 */
const initialState = {
  loading: false,
  data: {},
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: { ...payload.data }
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };

    default:
      return state;
  }
};

/**
 *
 * Actions
 */

export const Creators = {
  addRegisterRequest: repo => ({
    type: Types.ADD_REQUEST,
    payload: repo
  }),

  addRegisterSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addRegisterFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
};
