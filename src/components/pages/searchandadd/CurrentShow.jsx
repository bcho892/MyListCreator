import React from 'react'
import "./currentshow.css"
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import CollectionContext from './CollectionContext';
import { Paper } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import InfoCard from './InfoCard'

export default function CurrentShow({ show }) {
    if (show === "") return (null);
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const { addAnime, anime } = React.useContext(CollectionContext);
    const handleClose = () => {

        setConfirmOpen(false);
    };
    const handleOpen = () => {
        setMessage(anime.filter(check => check.title === show.title).length > 0 ? "Already Exists!" : "Show Added.")
        setConfirmOpen(true);
        if (message === "Show Added.") {
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


    var addTo = <Button variant="contained" style={{ marginBottom: "3rem" }} onClick={() => { handleOpen() }} disableElevation >
        Add to Collection </Button>;
    var preview = show.trailer.url === null ? <img src={show.images.jpg.image_url} alt={show.images.webp.image_url} /> : <iframe src={'http://www.youtube.com/embed/' + show.trailer.youtube_id}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        style={{ width: "70%", height: "30vw" }}
    ></iframe>

    return (
        <div>
            <Paper variant="outlined"  >
                <div className="infoholder">
                    <div className="currentdisplay">
                        <Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>{show.title}</Typography>

                        <div className="animedetails">

                           <Typography variant="body1" sx={{ margin: "5vw", textAlign: "justify", width:{ md: "inherit" , lg: "50%"}}}  gutterBottom>
                                <span style={{ fontSize: 20 }}>Synopsis</span> <br />
                                {show.synopsis} {"\n"}
                            </Typography>
                            <span className="detailbox">
                                <InfoCard />
                            </span>
                        </div>
                        {preview}
                        {addTo}

                    </div>
                </div>
            </Paper>
            {confirmMessage(message)}
        </div>
    )
}


