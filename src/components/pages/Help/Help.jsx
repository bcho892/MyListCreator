import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Box, Divider } from '@mui/material'
export default function Help() {
    return (
        <Paper elevation={0} sx={{ width: "60%", padding: "5vw", display: "flex", justifyContent: "center" }} >
            <Box sx={{ width: 320 }}>
                <Typography variant='h2' textAlign='left' gutterBottom>How to Use</Typography>

                <Typography variant='h6' >My Collection</Typography>
                <Typography variant='body2' color="text.secondary" textAlign="justify" gutterBottom>This is where you can see the shows that you've added with the
                    "Add Title" feature individually. This is also where you can delete shows from your collection
                    as well as sort them.</Typography>
                <Divider variant="middle" sx={{ margin: "1rem 0" }} />
                <Typography variant='h6'  >Add Title</Typography>
                <Typography variant='body2' color="text.secondary" textAlign="justify">Here you are able to search shows by their name, or undertake an predetermined search
                    query based on popularity or airing status. After finishing a search, clicking a result will show you
                    further information about the chosen show. From there you can then also choose to add it to your collection</Typography>
                <Divider variant="middle" sx={{ margin: "1rem 0" }} />
                <Typography variant='h6' gutterBottom>Generate List</Typography>
                <Typography variant='body2' color="text.secondary" textAlign="justify">Displays the items in your collection in a more compact and organised manner;
                    I am intending to add more functionality to this page in the future. For now it just acts as a summary of sorts.</Typography>
            </Box>
        </Paper>
    )
}

