import React, { createContext, useEffect, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=> {

  const [input,setInput] = useState("");
  const [recentPrompt,setRecentPrompt] = useState("");
  const [prevPrompts,setPrevPrompts] = useState([]);
  const [showResult,setShowResult] = useState(false);
  const [loading,setLoading] = useState(false);
  const [resultData,setResultData] = useState("");

  useEffect(() => {
    const onSent = async (prompt) => {
      await run(prompt);
    };

  
  }, []);

  const contextValue = {
    // Add any values or functions you need to pass down to your context
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
