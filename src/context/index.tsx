import React, { createContext, useContext, ReactNode, useState } from "react";

interface CheckedContextProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckedContext = createContext<CheckedContextProps | undefined>(
  undefined
);

export const CheckedProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckedContext.Provider value={{ checked, setChecked }}>
      {children}
    </CheckedContext.Provider>
  );
};

export const useChecked = () => {
  const context = useContext(CheckedContext);
  if (!context) {
    throw new Error("useChecked must be used within a CheckedProvider");
  }
  return context;
};
