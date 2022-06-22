import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Tooltip } from '@mui/material';
import CollectionContext from '../pages/searchandadd/CollectionContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoIcon from '@mui/icons-material/Info';
import { NavLink } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';

export default function Display({ anime }) {
  const { deleteAnime } = React.useContext(CollectionContext);
  return (

    <Card variant="outlined" style={{ maxWidth: "350px", minWidth: "330px", textAlign: "left"}}>
      <CardHeader
        component={Typography}
        title={anime.title}>
        <Typography gutterBottom variant="h5" component="div">
          {anime.title}
        </Typography>
      </CardHeader>
      <CardActionArea>
        <CardContent>
          <img src={anime.images.jpg.image_url} alt={anime.images.webp.image_url} width="100%"></img>
          <Typography variant="body2" color="text.secondary" >
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Tooltip title="Delete Title">
          <Button size="small" color='primary' onClick={() => deleteAnime(anime.mal_id)}>
            <DeleteForeverIcon />
          </Button>
        </Tooltip>
        <NavLink to="/addtitle" style={{ textDecoration: "none" }}>
          <Tooltip title="Info">
            <Button size="small" color='primary'>
              <InfoIcon />
            </Button>
          </Tooltip>
        </NavLink>
        <Tooltip title="Go to MAL site">
          <Button size="small" color='primary' onClick={() => window.open(anime.url, "_blank")}>
            <LanguageIcon />
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}