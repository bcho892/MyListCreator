import React from 'react'

const CurrentContext = React.createContext();

export function CurrentProvider({children}){
    const[currentShow, setCurrentShow] = React.useState("");

    const changeCurrent = (show) => {
        setCurrentShow(show);
        console.log(show);
    };

    return(
        <CurrentContext.Provider value={{currentShow, changeCurrent}}>{children}</CurrentContext.Provider>
    )
}

export default CurrentContext;

