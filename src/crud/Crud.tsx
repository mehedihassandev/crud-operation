import { Box } from "@mui/material";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/TablePart.css";
import Model from "./Model";
import TablePart from "./TablePart";

const Crud = () => {
  const [modelOpen, setModelOpen] = useState(false);

  const [rows, setRows] = useState([
    {
      page: "Home",
      description: "This is the main page",
      status: "live",
    },
    {
      page: "Home 2",
      description: "This is the main page",
      status: "draft",
    },
    {
      page: "Home 3",
      description: "This is the main page",
      status: "error",
    },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handelEditRow = (index: any) => {
    setRowToEdit(index);

    setModelOpen(true);
  };

  const handleDeleteRow = (targetIndex: any) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  const handelSubmit = (newRow: {
    page: string;
    description: string;
    status: string;
  }) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, index) => {
            if (index !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };

  return (
    <Layout>
      <Box className="crud-wraper">
        <TablePart
          rows={rows}
          deleteRow={handleDeleteRow}
          editRow={handelEditRow}
        />
        <button className="btn" onClick={() => setModelOpen(true)}>
          Add
        </button>
        {modelOpen && (
          <Model
            closeModel={() => {
              setModelOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handelSubmit}
            defaultValue={rowToEdit !== null ? rows[rowToEdit] : undefined}
          />
        )}
      </Box>
    </Layout>
  );
};

export default Crud;
