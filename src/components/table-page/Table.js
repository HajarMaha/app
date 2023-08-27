import React, { useState } from 'react';
import { TableCell, TableContainer, Table, TableBody, TableRow, Card } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';

const jsonData = {
    "name" : "hajar",
    "age" : "23",
    "job" : "engineer",
    "address" : [
        {
            "contry" : "Morocco",
            "city" : "Casablanca"
        },
        {
            "contry" : "Spain",
            "city" : "Grenada"
        },
        {
            "contry" : "France",
            "city" : "Marseille"
        },
        {
            "contry" : "Canada",
            "city" : "Otawa"
        },
        {
            "contry" : "UK",
            "city" : "London"
        },
        {
            "contry" : "Germany",
            "city" : "Berlin"
        },
        {
            "contry" : "Egypt",
            "city" : "Cairo"
        },
        {
            "contry" : "Tunis",
            "city" : "Tunis"
        }
    ]
}

const rowsPerPageOptions = [5, 10, 25];

export default function TableCon() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const dataKeys = Object.keys(jsonData);
    const slicedDataKeys = dataKeys.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Card>
            <TableContainer >
                <Table style={{ width : 500 }}  >
                    <TableHead >
                        <TableRow>
                            <TableCell align="right" >Contry</TableCell>
                            <TableCell align="right" >City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> 
                        {jsonData.address.map((obj, index) => (
                            <TableRow>
                                <TableCell align="right" >{obj.contry}</TableCell>
                                <TableCell align="right" >{obj.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={dataKeys.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Card>
    );
}