import React from 'react'
import './about.css'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import Link from '@mui/material/Link';
import { ReactComponent as GithubLogo } from './logos/github.svg'
import Divider from '@mui/material/Divider'

export default function Help() {
    return (
        <Paper elevation={0} sx={{ width: "60%", padding: "5vw", display: "flex", justifyContent: "center", overflowY: "auto" }} >
            <Box sx={{ width: 320 }}>
                <Typography variant='h2' textAlign='left' gutterBottom>About</Typography>

                <Typography variant='body2' color="text.secondary" textAlign="justify" gutterBottom>This is a Web App built using <Link href="https://reactjs.org/" rel="noopener" target="_blank">React</Link> incorporating
                    the <Link href="https://mui.com/" rel="noopener" target="_blank">Material UI (v5)</Link> library, while using the <Link href="https://jikan.moe/" rel="noopener" target="_blank">Jikan API</Link> to
                    provide the data for the search (All data used is based on that from MyAnimeList.com). <br /> <br /> I have undertaken this project to improve my understanding
                    of React and APIs, as well as to practice my UI skills.
                </Typography>
                <Divider variant="middle" sx={{ margin: "1rem 0" }} />
                <div className="logos"><GithubLogo style={{ marginLeft: "rem", height: "2rem", width: "2rem", cursor: "pointer" }}
                    onClick={() =>
                        window.open("https://github.com/bcho892/MyListCreator", "_blank", "noopener")} /></div>

            </Box>
        </Paper>
    )
}

