import {
    SET_CURRENT_USER,
    USER_LOADING,
    SUCCESSFUL_REGISTER,
    GO_TO_LOGIN
  } from "../actions/types";

  const isEmpty = require("is-empty");

  const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    newUser: true
  };

  export default function( state= initialState, action){
      switch(action.type){
          case SET_CURRENT_USER:
              return{
                  ...state,
                  isAuthenticated: !isEmpty(action.payload),
                  user: action.payload
              }
          case USER_LOADING:
              return{
                  ...state,
                  loading: true
              }
          case SUCCESSFUL_REGISTER:
              return{
                  ...state,
                  newUser: false
              }
          case GO_TO_LOGIN:
              return{
                  ...state,
                  newUser: false
              }
          default:
              return state
      }
  }