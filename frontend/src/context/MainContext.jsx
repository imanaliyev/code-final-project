import React, { createContext } from 'react'
import UserProvider from './UserContext';
import BasketProvider from './BasketContext';
export const MainContext = createContext();
function MainProvider({ children }) {
    return (
        <MainContext.Provider>

      
        <UserProvider>
            <BasketProvider>
                {children}
            </BasketProvider>
        </UserProvider>
        </MainContext.Provider>
    )
}

export default MainProvider