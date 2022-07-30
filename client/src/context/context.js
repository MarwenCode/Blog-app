import React, {useState, useReducer, useEffect} from "react";
import reducer from "./reducer";
import axios from "axios";


export const AppContext = React.createContext()

const initialState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    // user: null,
    isFetching: false,
    error:false
}

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

 




    return(
        <AppContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch

        }}        
        >{children}

        </AppContext.Provider>
    )







}