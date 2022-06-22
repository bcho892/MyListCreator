import "./collections.css"
import React from 'react'
import Display from "../../../components/display/Display"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SortIcon from '@mui/icons-material/Sort';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CollectionContext from "../searchandadd/CollectionContext";
import EmptyCollectionCard from "./EmptyCollectionCard";
import { SpeedDial, SpeedDialAction } from "@mui/material";


const SortButton = () => {
  const {anime, setAnime } = React.useContext(CollectionContext);

  return (

    <SpeedDial
      ariaLabel='Sort button'
      style={{ position: "absolute", bottom: "1rem", right: "2rem" }}
      icon={<SortIcon />}

    >

      <SpeedDialAction
        icon={<SortByAlphaIcon />}
        tooltipTitle={"Sort by Title"}
        onClick={() => {
          let temp = [...anime];
          temp.sort((a, b) => a.title.localeCompare(b.title));
          setAnime(temp);
        }}
      />
      <SpeedDialAction
        icon={<FormatListNumberedIcon />}
        tooltipTitle={"Sort by MAL Ranking"}
        onClick={() => {
          let temp = [...anime];
          temp.sort((a, b) => a.score - b.score);
          setAnime(temp)}}/>

    </SpeedDial>
  )

}

export default function Collection() {

  const { anime } = React.useContext(CollectionContext);
  var collectionView;
  console.log()
  if (anime.length === 0) {
    collectionView = <EmptyCollectionCard />
  } else {
    collectionView = anime.map(anime => <Grid item><Display anime={anime} /> </Grid>)
  }

  return (
    <div className="collection">
      <div className="collectioncontainer">
        <div className="displayholder">
          <Box sx={{ justifyContent: 'center', alignItems: 'center' }}>

            <Grid container spacing={2} style={{ justifyContent: "center", alignItems: 'center' }}>

              {collectionView}

            </Grid>
          </Box>
        </div>

        <SortButton />

      </div>
    </div>
  )
}
