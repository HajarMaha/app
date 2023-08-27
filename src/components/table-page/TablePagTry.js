import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from '@mui/material';

const jsonData = {
    "name" : "hajar",
    "age" : "23",
    "job" : "engineer",
  "address": [
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
};

const rowsPerPageOptions = [5, 10, 25];

function TablePagTry() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const allDataRows = Object.values(jsonData.address).flat();
  const slicedDataRows = allDataRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedDataRows.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.contry}</TableCell>
                <TableCell>{item.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={allDataRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default TablePagTry;