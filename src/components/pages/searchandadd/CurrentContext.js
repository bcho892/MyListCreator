import React from 'react'

const CurrentContext = React.createContext();

export function CurrentProvider({children}){
    const[currentShow, setCurrentShow] = React.useState("");
    const[showCharacters, setShowCharacters] = React.useState([]);
    const changeCurrent = (show) => {
        setCurrentShow(show);
        console.log(show);
    };
    const setCharacters = (characterList) => {
        setShowCharacters(characterList)
    }
 
    return(
        <CurrentContext.Provider value={{currentShow, changeCurrent,showCharacters, setCharacters}}>{children}</CurrentContext.Provider>
    )
}

export default CurrentContext;

