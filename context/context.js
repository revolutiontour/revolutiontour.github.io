import React, {
    createContext,
    useContext,
    useReducer,
    useEffect,
    useMemo,
    useCallback
  } from "react";
  import { reducers } from "./rootReducer";
  export const RootContext = createContext({});
  
  export const STORAGE_KEY = "rootState";
  
  const Context = ({ children }) => {
  
    // call the function to get initial state and global reducer
    const [initialState, mainReducer] = reducers;
  
    // setup useReducer with the returned value of the reducers function
    const [state, dispatch] = useReducer(mainReducer, initialState, () => {
        let Local;
        let ParseLocal;
        if(typeof window !== "undefined") {
      Local = localStorage.getItem(STORAGE_KEY);
      ParseLocal = JSON.parse(Local);
        }else{
            Local = false
        }
      return Local ? ParseLocal : initialState;
    });

    // pass in the returned value of useReducer
    const contextValue = useMemo(
      () => ({
        state,
        dispatch,
      }),
      [state, dispatch]
    );
  
    useEffect(() => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);
  
    return (
      <RootContext.Provider value={contextValue}>{children}</RootContext.Provider>
    );
  };
  
  export const GetRootContext = () => useContext(RootContext);
  
  export const withContext = (Component) => {
    return (props) => {
      return (
        <RootContext.Consumer>
          {(value) => {
            return <Component {...props} {...value} />;
          }}
        </RootContext.Consumer>
      );
    };
  };
  
  export default Context;
  