import "./searchandadd.css"
import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import Grid from '@mui/material/Grid';
import CurrentContext from "./CurrentContext";
import ResultsList from './ResultsList';
import CurrentShow from "./CurrentShow";
import Suggestions from "./Suggestions";

export default function Searchandadd() {
    const resultRef = React.useRef(null);
    const [isSpamBlock, setIsSpamBlock] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [previousSearch, setPreviousSearch] = React.useState('');
    const [titles, setTitles] = React.useState([]);
    const queries = ["https://api.jikan.moe/v4/top/anime?filter=bypopularity",
        "https://api.jikan.moe/v4/top/anime?filter=upcoming",
        "https://api.jikan.moe/v4/top/anime?filter=airing"]
    const { currentShow, showCharacters, setCharacters } = React.useContext(CurrentContext);


    React.useEffect(() => {
        unblock();

    }, [titles, showCharacters])

    const unblock = () => {
        setTimeout(() => {
            setIsSpamBlock(false);
        }, 333);
    }

    async function getCharacters(id) {

        if (isSpamBlock) return;
        setIsSpamBlock(true);
        const url = "https://api.jikan.moe/v4/anime/" + id + "/characters";
        let res = await fetch(url);
        setCharacters(await res.json());

    }

    async function getPremade(index) {

        if (isSpamBlock) return;
        setIsSpamBlock(true);
        console.log("API Call");
        const url = queries[index];
        let res = await fetch(url);
        setTitles(await res.json());

    }

    async function whenSearch() {
        if (isSpamBlock) return;
        if (searchTerm === '' || searchTerm === previousSearch) {
            return;
        }
        setIsSpamBlock(true);
        setPreviousSearch(searchTerm);
        const url = "https://api.jikan.moe/v4/anime?q=" + searchTerm;
        let res = await fetch(url);
        setTitles(await res.json());
        unblock();
        console.log(titles);
    }

    function scrollDown() {
        let height = resultRef.current.offsetHeight;
        resultRef.current.scrollBy(0, height);
    }

    const enterSubmit = e => {
        e.preventDefault();
        console.log("submit");
        whenSearch();
    };

    const textEvent = e => {
        setSearchTerm(e.target.value);
    };


    return (

        <div className="searchfield" ref={resultRef}>
            <Grid container spacing={3} sx={{ padding: '0.9rem' }}  >
                <Grid item xs={12} style={{ overflowWrap: "break-word" }}>
                    <Paper variant="outlined" style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: "center", borderRadius: "1rem" }}>
                        <Box
                            component="form"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                '& > :not(style)': { m: "2rem 3rem 0.75rem 3rem " },
                            }}
                            onSubmit={enterSubmit}

                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-name"
                                label="Search"
                                sx={{
                                    width: "100%"
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon style={{ cursor: "pointer" }} onClick={whenSearch} />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={textEvent}
                            ></TextField>
                        </Box>
                        <div className="suggestionholder">
                            <Suggestions fetchFor={getPremade} />
                        </div>
                        <div className="resultholder">
                            <ResultsList titles={titles} scrollfunc={scrollDown} charFunc={getCharacters} />
                        </div>
                    </Paper >
                </Grid>
                <Grid xs={12} item style={{ maxWidth: "inherit" }}>

                    <CurrentShow show={currentShow} characters={showCharacters} />

                </Grid>
            </Grid>

        </div>
    )
}

