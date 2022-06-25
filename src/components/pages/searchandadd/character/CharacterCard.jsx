import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function CharacterCard({ character }) {
  return (
    <div className="cardarea" >
      <Card sx={{ width: 250,userSelect: "none" }}  >

        <CardMedia
          component="img"
          height="300"
          image={character ? character.character.images.jpg.image_url : "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"}
          alt={character ? character.character.images.webp.image_url : null}
          sx={{ pointerEvents: "none",userSelect: "none"  }}
        />
        
          <CardContent>
            <Typography variant="h6" component="div" onClick={() => window.open(character.character.url, "_blank","noopener")} sx={{ cursor: "pointer",userSelect: "none" }} >
              {character ? character.character.name : "No Info"}
            </Typography>
            <Typography variant="body2" color="text.secondary"  sx={{ userSelect: "none" }}>
              {character ? character.role : "No Info"}
            </Typography>
          </CardContent>
    
      </Card>
    </div>
  );
}