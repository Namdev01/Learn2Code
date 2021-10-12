import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '../../Data/List'
import LinkIcon from '@material-ui/icons/Link';
const Resouces = () => {
    return (
        <Paper elevation={3} className="paper">
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Topic</TableCell>
                            <TableCell align="center">Problem</TableCell>
                            <TableCell align="center">Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> 
                        {List.map((c) => (
                            <TableRow>
                                <TableCell align="center">{c['Topic:']}</TableCell>
                                <TableCell align="center">{c['Problem: ']}</TableCell>
                                <TableCell align="center"><a href={c.URL} target='_blank' rel="noreferrer"><LinkIcon/></a></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default Resouces
