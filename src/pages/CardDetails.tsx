import { Box, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CardData from "../data/CardData";

const CardDetails = () => {
  const { id } = useParams();

  const item = CardData.find((CardData) => CardData.id === id);
  return (
    <Layout>
      <Grid container>
        <Grid xs={12}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "42px",
              marginTop: "50px",
              marginBottom: "50px",
              color: "purple",
            }}
          >
            Product Details
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography
            sx={{
              fontSize: "26px",
              marginLeft: "30px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            {item?.title}
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              marginLeft: "30px",
              marginBottom: "100px",
              textAlign: "justify",
            }}
          >
            {item?.dec}
          </Typography>
          <Box
            sx={{
              margin: "30px",

              "& a": {
                textDecoration: "none",
                padding: "10px 40px",
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            <Link to={"/card"}>Previous Page</Link>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              "& img": {
                marginLeft: "30px",
                marginBottom: "30px",
                width: "90%",
                height: "50%",
              },
            }}
          >
            <img src={item?.img} alt="product-details" />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CardDetails;
