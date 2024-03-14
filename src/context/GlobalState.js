import React, { createContext, useContext, useReducer } from 'react'
import AppReducer from './AppReducer.js'

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -30 },
        { id: 2, text: 'Tip', amount: +300 },
        { id: 3, text: 'Salary', amount: +2330 },
        { id: 4, text: 'Groceries', amount: -110 },
    ]
}

// Context
export const GlobalContext = createContext(initialState);

//Provider 
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

return (<GlobalContext.Provider value={{
    transactions: state.transactions
}}>
    {children}
</GlobalContext.Provider>);
}