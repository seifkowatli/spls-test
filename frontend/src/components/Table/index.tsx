import { Table as MuiTable, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow,}from "@mui/material";
import { FC } from "react";

export interface TableProps {
  rows : Record<string , any>[];
  columns : string[];
}

const Table : FC<TableProps> = ({rows , columns}) => {
  return (
    <TableContainer sx={{minHeight : 170}} component={Paper}>

    <MuiTable size="small">
      <TableHead sx={{backgroundColor : '#161a21'}}>
        <TableRow>
          {columns.map((column) => (
            <TableCell align="left">{column}</TableCell>
          ))  
          
          }
        </TableRow>
      </TableHead>
      <TableBody >
        {!!rows &&  rows.map((row) => (
          <TableRow>
            {
              Object.keys(row).map((column) => (
                <TableCell align="left">{row[column]}</TableCell>
              ))
            }
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
    </TableContainer>
  );
};

export default Table;
