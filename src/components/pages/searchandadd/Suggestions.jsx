import React from 'react'
import { Chip,useMediaQuery } from '@mui/material'
import Stack from '@mui/material/Stack';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LiveTvIcon from '@mui/icons-material/LiveTv';


const actions = [
    { option: "Top Rated", icon: <WhatshotIcon style={{width: 20, height:20}}/>, index: 0},
    { option: "Upcoming", icon: <CalendarMonthIcon style={{width: 20, height:20}}/>, index: 1},
    { option: "Airing", icon: <LiveTvIcon style={{width: 20, height:20}}/> , index: 2}]

export default function Suggestions({fetchFor}) {
    const noText = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const toDisplay = actions.map((action,index) => {
    let toUse = noText ? "" : action.option;
    return <Chip onClick={()=>fetchFor(action.index)} icon={action.icon} sx={{userSelect: "none",padding: {md:"0 0.5rem", xs:"0 0 0 0.8rem"}, width:{md:"119px", xs:"auto"}}} key={index} label={toUse} variant="outlined"/>});
    
    return (
        <Stack direction="row" spacing={1}>
            {toDisplay}
        </Stack>
    )
}
