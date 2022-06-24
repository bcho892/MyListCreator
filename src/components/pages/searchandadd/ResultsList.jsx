import React from 'react'
import Result from "./Result"
import "./resultlist.css"
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
export default function ResultsList({ titles, scrollfunc, charFunc }) {




    if (titles === []) {
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
    } else if (!titles.data || titles.data.length === 0 ) {
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
    } else {
        var toDisplay = titles.data.map(anime => <Result key={anime.mal_id} singleTitle={anime} scrollfunc={scrollfunc} charFunc={charFunc}></Result>)
    }
    return (

        <div className='thelist'>{toDisplay}</div>
    )
}
