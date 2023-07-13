import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const TableTwo = () => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUser = () => {
    axios.get("http://localhost:3004/students").then((res) => {
      setUsers(res.data.reverse());
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handelDelete = (id: string) => {
    axios.delete(`http://localhost:3004/students/${id}`).then(() => loadUser());
  };

  return (
    <div>
      <Box>
        <Box
          sx={{
            textAlign: "right",
            margin: "30px",

            "& a": {
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
            },
          }}
        >
          <Link to={"/adduser"}>Add Users</Link>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              sx={{
                "& th": {
                  fontWeight: "600",
                  fontSize: "16px",
                },
              }}
            >
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((data, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.name}
                  </TableCell>
                  <TableCell align="center">{data.email}</TableCell>
                  <TableCell align="center">{data.phone}</TableCell>
                  <TableCell align="right">
                    <Box>
                      <Link to={`/user/${data.id}`}>
                        <VisibilityIcon
                          color="primary"
                          sx={{ cursor: "pointer" }}
                        />
                      </Link>
                      <Link to={`/edit/${data.id}`}>
                        <EditIcon
                          color="secondary"
                          sx={{ marginLeft: "20px", cursor: "pointer" }}
                        />
                      </Link>
                      <DeleteIcon
                        onClick={() => handelDelete(data.id)}
                        color="warning"
                        sx={{ marginLeft: "20px", cursor: "pointer" }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default TableTwo;
