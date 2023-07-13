import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import "../styles/TablePart.css";

interface Row {
  page: string;
  description: string;
  status: string;
}

interface TablePartProps {
  rows: Row[];
  deleteRow: (targetIndex: any) => void;
  editRow: (index: any) => void;
}

const TablePart: React.FC<TablePartProps> = ({ rows, deleteRow, editRow }) => {
  return (
    <>
      <Box className="table-wraper">
        <table className="table">
          <thead>
            <tr>
              <th>Page</th>
              <th className="expand">Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => {
              const statusText =
                row.status.charAt(0).toUpperCase() + row.status.slice(1);
              return (
                <tr key={index}>
                  <td>{row.page}</td>
                  <td>{row.description}</td>
                  <td>
                    <span className={`label label-${row.status}`}>
                      {statusText}
                    </span>
                  </td>
                  <td>
                    <span className="actions">
                      <CreateIcon
                        className="edit-btn"
                        onClick={() => editRow(index)}
                      />
                      <DeleteIcon
                        className="delete-btn"
                        onClick={() => deleteRow(index)}
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>
    </>
  );
};

export default TablePart;
