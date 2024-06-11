import React, { createContext, useEffect } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

  useEffect(() => {
    const onSent = async (prompt) => {
      await run(prompt);
    };

    onSent("Pasan");
  }, []);

  const contextValue = {
    // Add any values or functions you need to pass down to your context
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
