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
    const [theme, setTheme]= useState("light");

    const toggleTheme = () => {
        setTheme((currentThem) => (currentThem === 'light' ? "dark" : "light"))
      }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])






    return(
        <AppContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,toggleTheme,theme, setTheme,
            dispatch

        }}        
        >{children}

        </AppContext.Provider>
    )







}