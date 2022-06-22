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


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function UserList() {
    const { anime } = React.useContext(CollectionContext)
    if(anime.length === 0){
        return <EmptyCollectionCard/>
    }
    return (
        
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell align="right">MAL Ranking</StyledTableCell>
                                <StyledTableCell align="right">Anime Year</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {anime.map((row) => (
                                <StyledTableRow key={row.title}>
         
                                    <StyledTableCell align="right">{row.title}</StyledTableCell>
                                    <StyledTableCell align="right">{row.score}</StyledTableCell>
                                    <StyledTableCell align="right">{row.year}</StyledTableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
         
            );
}