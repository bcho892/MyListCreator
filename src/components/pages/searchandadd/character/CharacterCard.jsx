import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CharacterCard({character}) {
  return (
    <Card sx={{ width: 250}}>
        <CardMedia
          component="img"
          height="300"
          image={character ? character.character.images.jpg.image_url : "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"}
          alt={character ? character.character.images.webp.image_url : null}
        />
        <CardContent>
          <Typography  variant="h6" component="div">
            {character ? character.character.name : "No Info"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character ? character.role : "No Info"}
          </Typography>
        </CardContent>
    </Card>
  );
}