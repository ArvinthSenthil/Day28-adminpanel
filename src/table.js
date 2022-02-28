import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, position, office, age, salary) {
  return { name, position, office, age, salary};
}

const rows = [
  createData('Airi Satou', 'Accountant', 'Tokyo', 33,'$162,700'),
  createData('Angelica Ramos', 'Cheif Executive Officer',"London", 47,'$1,200,000,'),
  createData('Ashton Cox', 'Junior Technical Author', 'San Francisco', 66, '$86,000'),
  createData('Bradley Grrer', 'Software Engineer', 'London', 41, '$132,000'),
  createData('Brenden Wagner', 'Software Engineer', 'San Francisco', 28, '$206,850'),
];

export function BasicTable() {
  return (
      <div className="table">
          <h3 className="tableheading">Table</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">position</TableCell>
            <TableCell align="right">office</TableCell>
            <TableCell align="right">age</TableCell>
            <TableCell align="right">salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.office}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}