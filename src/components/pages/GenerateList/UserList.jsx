import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CollectionContext from '../searchandadd/CollectionContext';
import EmptyCollectionCard from '../collection/EmptyCollectionCard';
import Typography from '@mui/material/Typography';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        minWidth:"3.5rem",

    },

}));




export default function UserList() {
    const { anime } = React.useContext(CollectionContext);
    return anime.length === 0 ? <EmptyCollectionCard /> : (

        <TableContainer component={Paper} >
            <Table >
                <TableHead >
                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell align="left">MAL Score</StyledTableCell>
                        <StyledTableCell align="left">Year</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {anime.map((row) => (
                        <TableRow style={{ height: "5rem" }} key={row.title}>

                            <StyledTableCell align="left"><Typography variant='h6'>{row.title}<br /><Typography variant='body1' color='text.secondary' >{row.title_japanese}</Typography></Typography></StyledTableCell>
                            <StyledTableCell align="left" ><Typography variant='h4' color='text.secondary'>{row.score ? row.score : "Unrated"}</Typography></StyledTableCell>
                            <StyledTableCell align="left"><Typography variant='h4' color='text.secondary'>{row.year}</Typography></StyledTableCell>

                        </TableRow>
                    ))}
   

                </TableBody>
            </Table>
        </TableContainer>

    );
}