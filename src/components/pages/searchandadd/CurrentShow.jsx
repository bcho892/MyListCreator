import React from 'react'
import "./currentshow.css"
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import CollectionContext from './CollectionContext';
import { Paper } from '@mui/material';

export default function CurrentShow({ show }) {
    const { addAnime } = React.useContext(CollectionContext);
    if (show === "") return (null);
    var addTo = <Button variant="contained" style={{ marginBottom: "3rem" }} onClick={() => { addAnime(show) }} disableElevation >
        Add to Collection </Button>;
    var preview = show.trailer.url === null ? <img src={show.images.jpg.image_url} alt={show.images.webp.image_url} /> : <iframe src={'http://www.youtube.com/embed/' + show.trailer.youtube_id}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        style={{ width:"70%",height:"30vw"}}
    ></iframe>

    return (
        <div>
            <Paper variant="outlined"  >
                <div className="infoholder">
                    <div className="currentdisplay">
                        <Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>{show.title}</Typography>
                        {preview}
                        <Typography variant="body1" style={{ margin: "3rem", textAlign: "justify" }} gutterBottom>
                            {show.synopsis} {"\n"}

                        </Typography>

                        {addTo}

                    </div>
                </div>
            </Paper>
        </div>
    )
}


