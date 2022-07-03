import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import Typography  from "@mui/material/Typography";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import { WeddingRow  } from "./WeddingRow";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { useState } from "react";
import './WeddingRow.css';




  


export const WeddingTable = (props) => 
{

  const [page, setPage] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  //const classes = tableStyles();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const weddings = props.data;
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
    

    return( 
    <TableContainer style={{margin : '30px 0px 0px 100px', width : '1240px'}}>
      <Table stickyHeader size="small"  aria-label="custom pagination table">
      <TableHead>
        <TableRow style={{ backgroundColor: "#F8F8F9" }}>
          {[
           // 'Status',
            "Names",
            "Email",
            "Date",
            "Price",
            'Paid',
            "Guests",
            "Goal",
          ].map((item, index) => {
            return (
              <TableCell
                key={index}
                align="center"
              >
                <h3>{item}</h3>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {weddings !== null && weddings.length !== 0 ? (
          (rowsPerPage > 0
            ? weddings.slice(  page * rowsPerPage,page * rowsPerPage + rowsPerPage)
            : weddings
          ).map((wedding, index) => (
               <WeddingRow key={index} index={index} wedding={wedding}/> 
          ))
        ) : (
            <Typography style={{ padding: "5px" }}><h1>No Data</h1></Typography>
          )}
      </TableBody>
      <TableFooter style={{ backgroundColor: '#F8F8F9' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={7}
          count={weddings.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { "aria-label": "rows per page" },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableFooter>
    </Table>
  </TableContainer>)



}