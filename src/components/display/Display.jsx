import * as React from 'react';
import { Button, Card, CardContent, Typography, CardActions, Tooltip } from '@mui/material';
import CollectionContext from '../pages/searchandadd/CollectionContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoIcon from '@mui/icons-material/Info';
import { NavLink } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';

export default function Display({ anime }) {
  const { deleteAnime } = React.useContext(CollectionContext);
  return (

    <Card variant="outlined" style={{ maxWidth: "350px", minWidth: "18rem", textAlign: "center"}}>

        <CardContent sx={{padding:"10px"}}>
        <Typography variant="body2" color="text.secondary"  >
          {anime.title}
          </Typography>
          <img src={anime.images.jpg.image_url} alt={anime.images.webp.image_url} style={{minWidth:"16rem" ,borderRadius:"0.75rem", paddingTop:"10px"}}></img>

        </CardContent>
     

      <CardActions sx={{paddingTop:0}} disableSpacing>
 
        <span className="buttons" style={{marginLeft:"auto"}}>
        <Tooltip title="Delete Title">
          <Button style={{minWidth:"40px"}}  color='primary' onClick={() => deleteAnime(anime.mal_id)}>
            <DeleteForeverIcon />
          </Button>
        </Tooltip>
        <NavLink to="/addtitle" style={{ textDecoration: "none" }}>
          <Tooltip title="Info">
            <Button style={{minWidth:"40px"}}  color='primary'>
              <InfoIcon />
            </Button>
          </Tooltip>
        </NavLink>
        <Tooltip title="Go to MAL site">
          <Button style={{minWidth:"40px"}} color='primary' onClick={() => window.open(anime.url, "_blank","noopener" )}>
            <LanguageIcon />
          </Button>
        </Tooltip>
        </span>
      </CardActions>

    </Card>
  );
}