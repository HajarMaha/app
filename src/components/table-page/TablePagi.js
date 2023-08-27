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
  id1: { name: 'John Doe', age: 30 },
  id2: { name: 'Jane Smith', age: 25 },
  id3: { name: 'John Doe', age: 30 },
  id4: { name: 'Jane Smith', age: 25 },
  id5: { name: 'John Doe', age: 30 },
  id6: { name: 'Jane Smith', age: 25 },
  id7: { name: 'John Doe', age: 30 },
  id8: { name: 'Jane Smith', age: 25 }
};

const rowsPerPageOptions = [5, 10, 25];

function PaginatedTable() {
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
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedDataKeys.map((key) => (
              <TableRow key={key}>
                <TableCell>{jsonData[key].name}</TableCell>
                <TableCell>{jsonData[key].age}</TableCell>
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
    </div>
  );
}

export default PaginatedTable;