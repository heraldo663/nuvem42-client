/**
 * Types
 */

export const Types = {
  ADD_REQUEST: "Login/ADD_REQUEST",
  ADD_SUCCESS: "Login/ADD_SUCCESS",
  ADD_FAILURE: "Login/ADD_FAILURE"
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
  addLoginRequest: repo => ({
    type: Types.ADD_REQUEST,
    payload: repo
  }),

  addLoginSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addLoginFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
};
