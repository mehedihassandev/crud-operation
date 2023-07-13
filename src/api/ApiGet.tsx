import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "../data/AxiosData";

const ApiGet = () => {
  const [myData, setMyData] = useState<
    { id: number; title: string; body: string }[]
  >([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const res = await axios.get("/posts");
      setMyData(res.data);
    } catch (error: any) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Layout>
      <Box>
        <Box>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  margin: "30px 30px",
                  textAlign: "center",
                  "& span": {
                    color: "#671ddf",
                  },
                }}
              >
                <h1>
                  <span>Axios</span> Api Testing
                </h1>
                {isError !== "" && <h2>{isError}</h2>}
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            margin: "30px 30px",
          }}
        >
          <Grid container spacing={2}>
            {myData.map((post) => {
              const { id, title, body } = post;
              return (
                <Grid item xs={4} key={id}>
                  <Box
                    sx={{
                      border: "1px solid #000",
                      padding: "20px 30px",
                      "& h2": {
                        marginTop: "10px",
                        fontSize: "18px",
                        paddingBottom: "15px",
                        lineHeight: "26px",
                      },
                      "& p": {
                        fontSize: "16px",
                        lineHeight: "22px",
                        textTransform: "capitalize",
                      },
                    }}
                  >
                    <h2>{title.slice(0, 25).toUpperCase()}</h2>
                    <p>{body.slice(0, 200)}</p>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default ApiGet;
