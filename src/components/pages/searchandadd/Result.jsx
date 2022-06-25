import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea, Tooltip } from '@mui/material';
import CurrentContext from './CurrentContext';


export default function Result({ singleTitle, scrollfunc, charFunc }) {
    const {changeCurrent} = React.useContext(CurrentContext);

    var touse;
    if (singleTitle === '') {
        return <div>Error</div>
    } else {
        touse = singleTitle.title;
    }
    return (
        <Tooltip title="Click to see more Info">
        <Card elevation={2} sx={{borderRadius:"1rem", textAlign:"center", width: "80%",  margin: '1rem', overflow:'visible', borderColor:"primary" }} >
            <CardActionArea onClick={() => {changeCurrent(singleTitle);
                                            charFunc(singleTitle.mal_id);
                                            scrollfunc();}} 
                                            sx={{borderRadius:"1rem"}}>
            <CardContent>
                <Grid container wrap="nowrap" spacing={1} direction="column" justifyContent="center" sx={{padding:"2rem"}}>
                    <Grid item>
                        <Typography style={{ margin: '1rem'}} variant="h5" component="div">
                            {touse}
                        </Typography>
                    </Grid>
                   
                    <Grid item>
                        <Typography variant="h2" color="text.secondary">
                            {singleTitle.score ? singleTitle.score : "?"}/10
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6" color="text.secondary">
                            {singleTitle.title_japanese}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            </CardActionArea>

        </Card>
        </Tooltip>
    );
}