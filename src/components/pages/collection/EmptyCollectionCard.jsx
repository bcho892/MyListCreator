import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
export default function EmptyCollectionCard() {
    return (
        <Grid item sx={12} style={{ margin: "0 1rem" }}>
            <Card sx={{ padding: "2rem" }}>
                <div className="noitem">
                    <CardContent>
                        <Typography variant="h4" style={{ marginBottom: "1.5rem" }}>
                            No items in your collection!
                        </Typography>
                        <Typography variant="body1" color="text.secondary" >
                            Go to "Add Title" to search for titles to add. 
  
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <NavLink to="/addtitle" style={{ textDecoration: "none" }}>
                            <Button variant='contained' style={{ color: "white" }}>Add Titles</Button>
                        </NavLink>
                        
                    </CardActions>
    
                </div>
            </Card>



        </Grid>
    );
}