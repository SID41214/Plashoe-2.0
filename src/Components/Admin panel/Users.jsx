import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dataHandling from "../../UserContext/UserContext";

export default function DenseTable() {
  const { userData } = useContext(dataHandling);

  return (
    <div className="container">
      <TableContainer component={Paper}>
        <div>
          <h1
            style={{
              textAlign: "center",
              color: "rgb(110,112,81)",
              backgroundColor: "ButtonHighlight",
            }}
          >
            Users
          </h1>
          <hr />
        </div>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>No</strong>{" "}
              </TableCell>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>E-mail</strong>
              </TableCell>
              <TableCell>
                <strong>User Name</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((value, index) => {
              const { name, email, username } = value;
              return (
                <TableRow
                  key={value.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell align="left">{name}</TableCell>
                  <TableCell align="left">{email}</TableCell>
                  <TableCell align="left">{username}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
