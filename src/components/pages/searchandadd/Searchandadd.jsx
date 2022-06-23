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
    const [name, setName] = React.useState('');
    const queries = ["https://api.jikan.moe/v4/top/anime?filter=bypopularity",
        "https://api.jikan.moe/v4/top/anime?filter=upcoming",
        "https://api.jikan.moe/v4/top/anime?filter=airing"]


    React.useEffect(() => {
        unblock();
    }, [name])

    const unblock = () => {
        setTimeout(() => {
            setIsSpamBlock(false);
        }, 500);
    }

    async function getPremade(index) {

        if (isSpamBlock) return;
        setIsSpamBlock(true);
        console.log("API Call");
        const url = queries[index];
        let res = await fetch(url);
        setName(await res.json());

    }

    function scrollDown() {
        let height = resultRef.current.offsetHeight;
        resultRef.current.scrollBy(0, height);
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
        setName(await res.json());
        unblock();
        console.log(name);
    }

    const enterSubmit = e => {
        e.preventDefault();
        console.log("submit");
        whenSearch();
    };

    const textEvent = e => {
        setSearchTerm(e.target.value);
    };

    const { currentShow } = React.useContext(CurrentContext);

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
                            <ResultsList titles={name} scrollfunc={scrollDown} />
                        </div>
                    </Paper >
                </Grid>
                <Grid xs={12} item style={{ maxWidth: "inherit" }}>

                    <CurrentShow show={currentShow} />

                </Grid>
            </Grid>

        </div>
    )
}

