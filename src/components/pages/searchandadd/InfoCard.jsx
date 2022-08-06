import * as React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Box, CardMedia } from '@mui/material';
export default function InfoCard({ show, showImage }) {

  return (
    <Paper elevation={0} sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", minWidth: "16rem", minHeight: "30rem", height: { md: "30rem", lg: "100%" }, backgroundColor: "#E0E0E0" }} >
      <Card sx={{ display: "flex", width: "60%", minHeight: "25rem" }}>
        {showImage ? <CardMedia
          component="img"
          sx={{ width: "100%", maxWidth: "20rem" }}
          image={show.images.jpg.image_url}
          alt="Show Image" /> : null}
        <Box sx={{ display: "flex" }}>
          <CardContent>
            <Typography variant='h6' >
              Rating
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" >
              {show.score ? show.score + "/10" : "Unrated"}
            </Typography>
            <Typography variant='h6'>
              Aired
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {show.aired.string}
            </Typography>
            <Typography variant='h6'>
              Genres
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {show.genres ? show.genres.map((genre) => genre['name']).toString().replaceAll(",", ", ") : "Unknown"}
            </Typography>
            <Typography variant='h6'>
              Theme
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {show.themes ? show.themes.map((theme) => theme['name']).toString().replaceAll(",", ", ") : "Unknown"}
            </Typography>
            <Typography variant='h6'>
              Demographic
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {show.demographics ? show.demographics.map((demographic) => demographic['name']).toString().replaceAll(",", ", ") : "Unknown"}
            </Typography>
          </CardContent>
        </Box>

      </Card>

    </Paper>

  );
}