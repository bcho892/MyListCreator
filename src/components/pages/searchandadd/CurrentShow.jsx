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
    const [dragScroll, setDragScroll] = React.useState({ mouseDown: false, currentX: 0, currentScroll: 0 });
    const { addAnime, anime } = React.useContext(CollectionContext);
    const fullWidth = useMediaQuery('(max-width:1000px)');
    const bigScreen = useMediaQuery('(min-width:1200px)');
    const ref = React.createRef(null);
    const dragCircle = React.createRef(null);
    const mouseDownHandle = (e) => {
        setDragScroll({ currentScroll: ref.current.scrollLeft, mouseDown: true, currentX: e.clientX - ref.current.offsetLeft });
    }

    const mouseUpHandle = (e) => {
        setDragScroll({ ...dragScroll, mouseDown: false });
    }

    const openDC = (e) => {
        dragCircle.current.classList.add("on");

    }
    const closeDC = (e) => {
        dragCircle.current.classList.remove("on");
    }

    const dragHandle = (e) => {
        dragCircle.current.style.left = e.clientX + 'px';
        dragCircle.current.style.top = e.clientY + 'px';
        if (!dragScroll.mouseDown) return;
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - dragScroll.currentX) * 2;
        ref.current.scrollLeft = dragScroll.currentScroll - walk;

    }

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
            <div className="dragcircle"
                ref={dragCircle} >Drag</div>
            <Paper variant="outlined"  >
                <Grid container sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Grid item sx={12}>

                        <div className="currentdisplay">
                            <Typography variant='h2' style={{ textAlign: "left", padding: '2rem 2rem 0 2rem' }}>{show.title}</Typography>
                            <Typography variant='h6' color='text.secondary'>{show.title_japanese}</Typography>
                            <Divider variant="middle" sx={{ width: "90%", mt: "2rem" }} />
                            <div className="animedetails" >
                                <Typography variant="body1" color='text.secondary' sx={{ margin: "2rem 2rem ", marginBottom: "0rem", textAlign: "justify", width: { md: "inherit", lg: bigScreen ? 750 : "50%" } }} gutterBottom>
                                    <span style={{ fontSize: 20, color: 'rgb(33,33,33)' }}>Synopsis</span> <br />
                                    {show.synopsis} {"\n"}
                                </Typography>

                                <span className="detailbox">
                                    <Divider variant="middle" sx={{ width: "100%", margin: "2rem 0" }} />
                                    <Typography variant='h5' style={{ textAlign: "left", marginBottom: "2rem" }} >Details</Typography>
                                    <InfoCard show={show} showImage={bigScreen} />
                                </span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sx={12}

                    >
                        <Divider variant="middle" sx={{ width: "100%", margin: "2rem 0" }} />

                        <Typography variant='h5' style={{ textAlign: "left" }} gutterBottom>Characters</Typography>
                        <Paper elevation={0}
                            onMouseDown={mouseDownHandle}
                            onMouseUp={mouseUpHandle}
                            onMouseMove={dragHandle}
                            onMouseOver={openDC}
                            onMouseLeave={closeDC}
                            
                            sx={{ margin: "2rem 0", display: "flex", flexDirection: "row", width: "100%", overflowX: "auto", justifyContent: "center", alignItems: "center", minHeight: "23rem", backgroundColor: "#E0E0E0" }}

                        >
                            <div className="charactercontent" ref={ref}>
                            <List sx={{ display: "flex", flexDirection: "row", width: fullWidth ? "76vw" : "62vw" }}>
                                {characters.length !== [] && characters.data ? characters.data.slice(0, 20).map(data => <ListItem><CharacterCard character={data} /></ListItem>) : <CharacterCard character={null} />}
                            </List>
                            </div>
                        </Paper>
                        <div>
                            <Divider variant="middle" sx={{ width: "100%", margin: "2rem 0" }} />
                        </div>
                    </Grid>

                    <Grid item sx={{ width: "100%", display: "flex", justifyContent: "center" }}>

                        {preview}


                    </Grid>
                    <Divider variant="middle" sx={{ width: "90%", marginTop: "2rem" }} />
                    <Grid item sx={12}>
                        <Button variant="contained"
                            style={{ margin: "2rem 1rem" }}
                            onClick={() => { handleOpen() }}
                            disableElevation >
                            Add </Button>
                        <Button variant="contained"
                            style={{ margin: "2rem 1rem" }}
                            onClick={() => window.open(show.url, "_blank","noopener")}
                            disableElevation >
                            View On MAL </Button>

                    </Grid>
                </Grid>


            </Paper>
            {confirmMessage(message)}
        </div >
    )
}


