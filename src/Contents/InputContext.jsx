import React from "react";
import { useState, createContext } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
    const [valueArray, setValueArray] = useState([]);
    return (
        <InputContext.Provider value={{ valueArray, setValueArray }}>
            {children}
        </InputContext.Provider>
    );
};
