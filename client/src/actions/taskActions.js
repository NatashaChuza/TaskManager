import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  SET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  COMPLETE_TASK,
  START_TASK,
  GET_CURRENT_TASK,
} from "./types";
import { bindActionCreators } from "redux";

//set tasks
export const setTasks = (info) => (dispatch) => {
  axios.post("/api/tasks/tasks", info).then((res) => {
    dispatch({
      type: SET_TASKS,
      payload: res.data,
    });
  });
};

//create new task
export const createNewTask = (userData) => (dispatch) => {
  axios.post("/api/tasks/create", userData).then((res) => {
    dispatch({
      type: CREATE_TASK,
      payload: res.data,
    });
  });
};

//update task
export const updateTask = (userData) => (dispatch) => {
  axios
    .patch("/api/tasks/update", userData)
    .then((res) => {
      dispatch({
        type: UPDATE_TASK,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//delete task
export const deleteTask = (id, history) => (dispatch) => {
  axios
    .delete(`/api/tasks/delete/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//complete task
export const completeTask = (id) => (dispatch) => {
  axios.patch(`/api/tasks/complete/${id}`).then((res) => {
      console.log("reaching")
    dispatch({
      type: COMPLETE_TASK,
      payload: id,
    });
  });
};

//start task
export const startTask = (id) => (dispatch) => {
  axios.patch(`/api/tasks/start/${id}`).then((res) => {
    dispatch({
      type: START_TASK,
      payload: id,
    });
  });
};

//retrieve task
export const getTask = (id) => (dispatch)=>{
    axios.get(`/api/tasks/get/${id}`).then( res => {
        dispatch({
            type: GET_CURRENT_TASK,
            payload: res.data
        })
    })
}
