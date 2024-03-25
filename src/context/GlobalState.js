import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";

// initial state
const initialState = {
    transactions: [
        { id: 1, text: "flower", amount: -20 },
        { id: 2, text: "book", amount: -100 },
        { id: 3, text: "salary", amount: +400 },
        { id: 4, text: "camera", amount: -200 },
    ]
}

// create context
export const GlobalContext = createContext(initialState)


// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    // action
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}