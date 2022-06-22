import React from 'react'
import Result from "./Result"
import "./resultlist.css"
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
export default function ResultsList({ titles, scrollfunc }) {
    if (titles === '') {
        return (
            <Box sx={{ width: "50%", marginTop: "25vh" }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton />
                <Skeleton animation="wave" />
            </Box>

        )
    } else if (titles.data.length === 0) {
        return <div className='noresults'><Typography variant="h3">No titles found</Typography></div>
    } else {
        var toDisplay = titles.data.map(anime => <Result key={anime.mal_id} singleTitle={anime} scrollfunc={scrollfunc}></Result>)
    }
    return (

        <div className='thelist'>{toDisplay}</div>
    )
}
