import { Box } from "@mui/material";
import Layout from "../components/Layout/Layout";
import TableTwo from "./TableTwo";

const CrudTwo = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            margin: "30px",
            textAlign: "center",
          }}
        >
          <TableTwo />
        </Box>
      </Layout>
    </>
  );
};

export default CrudTwo;
