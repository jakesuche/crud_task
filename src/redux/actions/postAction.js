import {
  FETCH_POSTS,
  NEW_POST,
  DELETE_POST,
  EDIT_POST,
  RESOLVE_STATE,
} from "./types";
import axios from "axios";

// fetch a  post
export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: RESOLVE_STATE,
      payload: true,
    });
    const result = await axios.get(
      "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
    );
    dispatch({
      type: RESOLVE_STATE,
      payload: false,
    });
    const data = result.data;
    if (result?.status === 200) {
      dispatch({
        type: FETCH_POSTS,
        payload: data,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: RESOLVE_STATE,
      payload: false,
    });
  }
};
//create a post
export const CreatePosts = (postData) => async (dispatch) => {
  try {
    const result = await axios.post(
      "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data",
      postData
    );
    const data = result.data;
    if (result?.status === 201) {
      dispatch({
        type: NEW_POST,
        payload: data,
      });

      return {
        status: "success",
      };
    }
  } catch (err) {
    console.log(err);
  }
};
//delete post
export const DeletePost = (id) => (dispatch) => {
  dispatch({
    type: DELETE_POST,
    payload: id,
  });
  return {
    massage: "User deleted successfull",
    proccess: true,
  };
};

//edit post
export const EditPost = (user) => (dispatch) => {
  console.log();
  dispatch({
    type: EDIT_POST,
    payload: user,
  });
};
