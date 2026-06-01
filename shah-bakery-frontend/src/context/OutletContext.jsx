import { createContext, useState } from "react";

const OutletContext = createContext();

export const OutletProvider = ({ children }) => {

  const [selectedOutlet, setSelectedOutlet] =
    useState(null);

  return (
    <OutletContext.Provider
      value={{
        selectedOutlet,
        setSelectedOutlet
      }}
    >
      {children}
    </OutletContext.Provider>
  );
};

export default OutletContext;