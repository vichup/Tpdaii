import React, { createContext, useState, useContext } from 'react';

const Context = createContext();

export const MyProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  // Define las funciones y métodos que modificarán el estado

  return (
    <Context.Provider value={{ state, setState }}>
      {children}
    </Context.Provider>
  );
};

export const useContext = () => {
  return useContext(Context);
};
