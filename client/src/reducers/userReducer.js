import { SET_USER, SET_USER_LOADER, SET_USER_ERROR } from "../actions";

const initialUserValue = {
  error: "",
  loading: false,
  id: null,
  name: null,
  score: null,
  playing: false,
  strikes: null,
};

const UserReducer = (state = initialUserValue, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return payload;

    case SET_USER_LOADER:
      state.loading = true;
      return { ...state };

    case SET_USER_ERROR:
      state.error = payload;
      state.loading = false;
      return { ...state };

    default:
      return state;
  }
};

export default UserReducer;
