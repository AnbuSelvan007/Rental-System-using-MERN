import React, { createContext, useContext, useState } from "react";

// Create Context
const IndexContext = createContext();

// Context Provider Component
export const IndexProvider = ({ children }) => {
  const [status, setStatus] = useState(false); // Shared state

  return (
    <IndexContext.Provider value={{ status, setStatus }}>
      {children}
    </IndexContext.Provider>
  );
};

// Custom Hook to use Context
export const useIndexContext = () => {
  return useContext(IndexContext);
};
