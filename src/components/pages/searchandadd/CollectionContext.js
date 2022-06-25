import React from 'react'

const CollectionContext = React.createContext();

export function CollectionProvider({ children }) {
    const [anime, setAnime] = localStorage.getItem("collection") === null ? React.useState([]) : React.useState(JSON.parse(localStorage.getItem("collection")));

    React.useEffect(() => {
        localStorage.setItem("collection", JSON.stringify(anime));
    }, [anime]);


    const addAnime = (title) => {
        setAnime((existing) => [...existing, title]);

    };
    const deleteAnime = (id) => {
        setAnime((anime) => anime.filter((show) => show.mal_id !== id))

    }

    const clear = () => {
        setAnime([]);
    }

    return (
        <CollectionContext.Provider value={{ anime, setAnime, addAnime, deleteAnime, clear }}>{children}</CollectionContext.Provider>
    )
}

export default CollectionContext;
