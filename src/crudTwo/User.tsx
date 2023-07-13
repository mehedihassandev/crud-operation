import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Read = () => {
  interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
  }
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:3004/students/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Layout>
        {user && (
          <>
            <Box
              sx={{
                margin: "auto",
              }}
            >
              <Box
                sx={{
                  margin: "30px",
                  backgroundColor: "gray",
                  padding: "30px",
                  borderRadius: "5px",

                  "& p": {
                    paddingBottom: "20px",
                    fontSize: "18px",
                    color: "white",
                  },
                }}
              >
                <Typography>Name: {user.name}</Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography>Phone: {user.phone}</Typography>
              </Box>
              <Box
                sx={{
                  margin: "30px",
                  "& a": {
                    padding: "10px 40px",
                    backgroundColor: "black",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "5px",
                  },
                }}
              >
                <Link to={"/crud2"}>Back</Link>
              </Box>
            </Box>
          </>
        )}
      </Layout>
    </>
  );
};

export default Read;
