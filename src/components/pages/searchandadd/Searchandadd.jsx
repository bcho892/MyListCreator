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
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



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
        }, 320);
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
        const url = queries[index];
        setTitles("LoadingWait");
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
        setTitles("LoadingWait");
        let res = await fetch(url);
        setTitles(await res.json());
        unblock();
    }

    function scrollDown() {
        let height = resultRef.current.offsetHeight;
        setTimeout(() => {
            resultRef.current.scrollBy(0, height);

        }, 1);
    }
    function scrollUp() {
        resultRef.current.scrollTo({ top: 0 })
    }
    const enterSubmit = e => {
        e.preventDefault();
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
                            <div className="resultcontent">
                                <ResultsList titles={titles} scrollfunc={scrollDown} charFunc={getCharacters} />
                            </div>
                        </div>
                    </Paper >
                </Grid>
                <Grid xs={12} item style={{ maxWidth: "inherit" }}>

                    <CurrentShow show={currentShow} characters={showCharacters} />

                </Grid>
            </Grid>

            <Fab color="primary" mini={true} onClick={() => scrollUp()} sx={{ position: "absolute", bottom: "1rem", right: "1rem" }} aria-label="toTop" >
                <ArrowUpwardIcon />
            </Fab>



        </div>
    )
}

