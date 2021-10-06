import React, { createContext, useReducer } from "react";
import { nl } from "../data";

const initialState = {
  pageData: nl,
  language: "nl",
  user: undefined,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        pageData: action.payload.data,
        language: action.payload.language,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
