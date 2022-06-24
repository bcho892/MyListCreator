import React from 'react'
import "./currentshow.css"
import { Typography, Grid, List, ListItem, useMediaQuery } from '@mui/material'
import Button from '@mui/material/Button';
import CollectionContext from './CollectionContext';
import { Paper, Divider } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import InfoCard from './InfoCard'
import CharacterCard from './character/CharacterCard';

export default function CurrentShow({ show, characters }) {
    if (show === "") return (null);
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const { addAnime, anime } = React.useContext(CollectionContext);
    const fullWidth = useMediaQuery('(max-width:1000px)');
    const bigScreen = useMediaQuery('(min-width:1200px)');


    const handleClose = () => {

        setConfirmOpen(false);
    };
    const handleOpen = () => {
        setMessage(anime.filter(check => check.title === show.title).length > 0 ? "Already Exists!" : "Show Added.")
        setConfirmOpen(true);
        if (anime.filter(check => check.title === show.title).length === 0) {
            addAnime(show);
        } else {
            return;
        }
    }

    const confirmMessage = (text) => {
        return <Snackbar
            open={confirmOpen}
            autoHideDuration={1000}
            message={text}
            onClose={handleClose}
        />
    };



    var preview = !show.trailer.url ? null : <iframe src={'http://www.youtube.com/embed/' + show.trailer.youtube_id}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        style={{ width: "70%", height: "30vw" }}
    ></iframe>

    return (
        <div>
            <Paper variant="outlined"  >
                <Grid container sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Grid item sx={12}>

                        <div className="currentdisplay">
                            <Typography variant='h2' style={{ textAlign: "center", padding: '2rem 2rem 0 2rem' }}>{show.title}</Typography>
                            <Typography variant='h6' color='text.secondary'>{show.title_japanese}</Typography>
                            <Divider variant="middle" sx={{ width: "90%", mt: "2rem" }} />
                            <div className="animedetails" >
                                <Typography variant="body1" color='text.secondary' sx={{ margin: "2rem 2rem ", marginBottom:"0rem", textAlign: "justify", width: { md: "inherit", lg: bigScreen ? 750 : "50%" } }} gutterBottom>
                                    <span style={{ fontSize: 20, color: 'rgb(33,33,33)' }}>Synopsis</span> <br />
                                    {show.synopsis} {"\n"}
                                </Typography>

  

                                <span className="detailbox">
                                <Divider variant="middle" sx={{ width: "100%", margin: "2rem 0" }} />
                                <Typography variant='h5' style={{ textAlign: "center", marginBottom:"2rem" }} >Details</Typography>
                                    <InfoCard show={show} showImage={bigScreen} />
                                </span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sx={12}>
                        <Divider variant="middle" sx={{ width: "100%", margin: "2rem 0" }} />

                        <Typography variant='h5' style={{ textAlign: "center" }} gutterBottom>Characters</Typography>
                        <Paper elevation={0} sx={{ margin: "2rem 0", display: "flex", flexDirection: "row", width: "100%", overflowX: "auto", justifyContent: "center", alignItems: "center", minHeight: "23rem", backgroundColor: "#E0E0E0" }} >
                            <List sx={{ display: "flex", flexDirection: "row", width: fullWidth ? "76vw" : "62vw" }}>
                                {characters.length !== [] && characters.data ? characters.data.slice(0, 20).map(data => <ListItem><CharacterCard character={data} /></ListItem>) : <CharacterCard character={null} />}
                            </List>
                        </Paper>
                        {preview ? <div>
                            <Divider variant="middle" sx={{ width: "100%", margin: "2rem 0" }} />
                            <Typography variant='h5' style={{ textAlign: "center", marginBottom: "2rem" }} >Trailer</Typography>
                        </div> : null}
                    </Grid>

                    <Grid item sx={{ width: "100%", display: "flex", justifyContent: "center" }}>

                        {preview}


                    </Grid>

                    <Button variant="contained"
                        style={{ margin: "2rem 1rem" }}
                        onClick={() => { handleOpen() }}
                        disableElevation >
                        Add to Collection </Button>
                    <Button variant="contained"
                        style={{ margin: "2rem 1rem" }}
                        onClick={() => { handleOpen() }}
                        disableElevation >
                        View On MAL </Button>
                </Grid>


            </Paper>
            {confirmMessage(message)}
        </div >
    )
}


