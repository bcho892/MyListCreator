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


export default function Searchandadd() {
    const resultRef = React.useRef(null);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [previousSearch, setPreviousSearch] = React.useState('');
    const [name, setName] = React.useState('');

    function scrollDown(){
        let height = resultRef.current.offsetHeight;
        resultRef.current.scrollBy(0,height);
    }

    async function whenSearch() {
        if (searchTerm === '' || searchTerm === previousSearch ) {
            return;
        }
        setPreviousSearch(searchTerm)
        const url = "https://api.jikan.moe/v4/anime?q=" + searchTerm;
        let res = await fetch(url);
        setName(await res.json());
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

        <div className="searchfield"  ref={resultRef}>
                <Grid container spacing={3} sx={{ padding: '0.9rem'}}  >
                    <Grid item xs={12} style={{overflowWrap: "break-word"}}>
                        <Paper variant="outlined"  style={{height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: "center", borderRadius: "1rem" }}>
                            <Box
                                component="form"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    '& > :not(style)': { m: "3rem" },
                                }}
                                onSubmit={enterSubmit}

                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-name"
                                    label="Search"
                                    sx={{
                                        width:"100%"
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
                            <div className="resultholder">
                                    <ResultsList titles={name} scrollfunc={scrollDown} />
                            </div>
                        </Paper >
                    </Grid>
                    <Grid xs={12} item style={{maxWidth:"inherit"}}>
                                
                            <CurrentShow  show={currentShow}/>
                            
                    </Grid>
                </Grid>

        </div>
    )
}

