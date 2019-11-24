import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const initialState = {};
  const reducer = (state, action) => {
    return {
      ...state,
      [action.key]: action.data
    };
  };
  
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
