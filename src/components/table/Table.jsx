import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yogоh", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export default function AccessibleTable() {
  const cellMaxWidth = 150;

  return (
    <TableContainer
      component={Paper}
      sx={{ overflowX: "auto", maxHeight: 900, border: "1px solid red" }}
    >
      <Table
        sx={{minWidth: "900px", border: "2px solid green", flexWrap: "wrap"}}
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ maxWidth: cellMaxWidth }}>
              Наименование
            </TableCell>
            <TableCell align="right" style={{ maxWidth: cellMaxWidth }}>
              Категории
            </TableCell>
            <TableCell align="right" style={{ maxWidth: cellMaxWidth }}>
              Место поставки
            </TableCell>
            <TableCell align="right" style={{ maxWidth: cellMaxWidth }}>
              Крайний срок
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                style={{ maxWidth: cellMaxWidth, overflowWrap: "break-word" }}
              >
                {row.name}
              </TableCell>
              <TableCell align="right" style={{ maxWidth: cellMaxWidth }}>
                {row.calories}
              </TableCell>
              <TableCell align="right" style={{ maxWidth: cellMaxWidth }}>
                {row.fat}
              </TableCell>
              <TableCell align="right" style={{ maxWidth: cellMaxWidth }}>
                {row.carbs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
