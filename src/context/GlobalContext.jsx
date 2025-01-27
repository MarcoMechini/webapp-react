import { createContext, useContext } from "react";


const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const navMenu = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/ListPage',
            title: 'List'
        }
    ]

    const globalProviderValue = {
        navMenu,
    }

    return (
        <GlobalContext.Provider value={globalProviderValue}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }