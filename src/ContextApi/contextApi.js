  import React, { createContext, useContext, useReducer } from "react";

  const initialState = {
      name: "Abdullah",
  };
  
  const reducer = (state, action) => {
      switch (action.type) {
          case 'CHANGE_NAME':
              return {
                  ...state,
                  name: action.payload,
              };
          default:
              return state;
      }
  };
  
  const UserContext = createContext();

  export const ContextProvider= ({children})=>{
    const [data, dispatch] = useReducer(reducer, initialState);
    return (
        <UserContext.Provider
        value={{name:data.name,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}
export const useStateContext = () => {
    return useContext(UserContext);
  };