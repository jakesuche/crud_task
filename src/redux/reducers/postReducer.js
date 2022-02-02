import {
  FETCH_POSTS,
  NEW_POST,
  DELETE_POST,
  EDIT_POST,
  RESOLVE_STATE,
} from "../actions/types";

const initialState = {
  users: [],
  isLoaded: false,
};

//reducers for all post actions

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        users: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        users: state.users.filter((user) => user?.id !== action?.payload),
      };
    case EDIT_POST:
      const updatedUser = action.payload;
      const updatedUsers = state.users.map((user) => {
        if (user?.id.toString() === updatedUser.id.toString()) {
          return updatedUser;
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
      };
    case RESOLVE_STATE:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default PostReducer;
