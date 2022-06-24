import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
export default function EmptyCollectionCard() {
    return (
        <Grid item sx={12} style={{ margin: "0 1rem" }}>
            <Card sx={{ padding: "2rem" }}>
                <div className="noitem">
                    <CardContent>
                        <Typography variant="h4" style={{ marginBottom: "1.5rem" }}>
                            No items in your collection!
                        </Typography>
                        <Typography variant="body1" >
                            Go to "Add Title" to search for titles to add.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <NavLink to="/addtitle" style={{ textDecoration: "none" }}>
                            <Button variant='contained' style={{ color: "white" }}>Add Titles</Button>
                        </NavLink>
                    </CardActions>
                </div>
            </Card>

            <Card sx={{ maxWidth: "100%", marginTop: '2rem' }}>
                <CardMedia
                    className='recommended'
                    component="img"
                    height="140"
                    image="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/211D5716899D97129EACC411430D7E7849C0B8FC1D68AC1F360D8B8CF2A4EB09/scale?width=1200&aspectRatio=1.78&format=jpeg"
                    alt="green iguana"
                />
                <CardMedia
                    className='recommended'
                    component="img"
                    height="140"
                    image="https://img.buzzfeed.com/buzzfeed-static/static/2021-04/20/17/campaign_images/4b34c94ad75b/how-a-sports-anime-called-haikyuu-helped-me-get-t-2-22925-1618939026-10_dblbig.jpg"
                    alt="green iguana"
                />
                <CardMedia
                    className='recommended'
                    component="img"
                    height="140"
                    image="https://www.slashfilm.com/img/gallery/the-death-note-anime-controversy-explained/l-intro-1648848939.jpg"
                    alt="green iguana"
                />

            </Card>


        </Grid>
    );
}