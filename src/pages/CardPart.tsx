import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";
import CardData from "../data/CardData";
import CardItem from "./CardItem";
const CardPart = () => {
  return (
    <Layout>
      <Box>
        <Box>
          <Box
            sx={{
              margin: "30px",
              textAlign: "center",

              "& p": {
                fontSize: "36px",
              },
            }}
          >
            <Typography>Card Part</Typography>
          </Box>
          <CardItem CardData={CardData} />
        </Box>
      </Box>
    </Layout>
  );
};

export default CardPart;
