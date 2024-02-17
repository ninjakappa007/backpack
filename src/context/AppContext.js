import { createContext, useState } from "react";

// creating and exporting context
export const AppContext = createContext();   

export default function AppContextProvider({children}){

    // create variables you need in all the components
    // this variable is to track user is in home page or not
    const [isHome , setIsHome] = useState(true);

    // this variable is to track user is in login page or not
    const [isLoginPage , setIsLoginPage] = useState(false);

    const [isExchange , setIsExchange] = useState(false);

    const value = {
        isHome,
        setIsHome,
        isLoginPage,
        setIsLoginPage,
        isExchange,
        setIsExchange
    };

    return <AppContext.Provider value={value}>
            {children }
        </AppContext.Provider>
};