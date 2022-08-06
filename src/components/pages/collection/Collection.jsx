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
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';


const SortButton = () => {
  const { anime, setAnime, clear } = React.useContext(CollectionContext);
  const checkSame = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].title !== anime[i].title) {
        return false;
      }
    }
    return true;
  }

  return (

    <SpeedDial
      ariaLabel='Sort button'
      style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
      icon={<SortIcon />}
    >
      <SpeedDialAction
        icon={<SortByAlphaIcon />}
        tooltipTitle={"Sort by Title"}
        onClick={() => {
          let temp = [...anime];
          anime.reverse();
          temp.sort((a, b) => a.title.localeCompare(b.title));
          if (!checkSame(temp)) {
            temp.reverse();
          }
          setAnime(temp);
        }}
      />
      <SpeedDialAction
        icon={<FormatListNumberedIcon />}
        tooltipTitle={"Sort by MAL Ranking"}
        onClick={() => {
          let temp = [...anime];
          anime.reverse();
          temp.sort((a, b) => a.score - b.score);
          if (!checkSame(temp)) {
            temp.reverse();
          }
          setAnime(temp)
        }} />
      <SpeedDialAction
        icon={<DeleteSweepIcon />}
        tooltipTitle={"Remove All Items"}
        onClick={() => {
          clear();
        }
        } />
    </SpeedDial>

  )

}

export default function Collection() {
  const { anime } = React.useContext(CollectionContext);

  var collectionView;

  if (anime.length === 0) {
    collectionView = <EmptyCollectionCard />
  } else {
    collectionView = anime.map(anime => <Grid key={anime.mal_id} item><Display anime={anime} /> </Grid>)
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

        {anime.length === 0 ? null : <SortButton />}

      </div>
    </div>
  )
}
