import { Box } from "@mui/material";
import Layout from "../components/Layout/Layout";
const Home = () => {
  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          "& img": {
            height: "90vh",
            width: "100%",
          },
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1688291091364-9658c26c1749?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          alt="homeImg"
        />
      </Box>
    </Layout>
  );
};

export default Home;
