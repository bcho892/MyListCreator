import React from 'react'

const CollectionContext = React.createContext();

export function CollectionProvider({ children }) {
    console.log(JSON.parse(localStorage.getItem("collection")))
    const [anime, setAnime] = localStorage.getItem("collection") === null ? React.useState([]) : React.useState(JSON.parse(localStorage.getItem("collection")));

    React.useEffect(() => {
        localStorage.setItem("collection", JSON.stringify(anime));
    }, [anime]);


    const addAnime = (title) => {
        if (anime.includes(title) || title.length === 0) return;
        setAnime((existing) => [...existing, title]);
        console.log(anime);

    };
    const deleteAnime = (id) => {
        setAnime((anime) => anime.filter((show) => show.mal_id !== id))
        
    }

    return (
        <CollectionContext.Provider value={{ anime, setAnime, addAnime, deleteAnime }}>{children}</CollectionContext.Provider>
    )
}

export default CollectionContext;
