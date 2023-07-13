import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3004/students/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    });
  }, []);

  const handelUpdate = (e: any) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3004/students/${id}`, data)
      .then(() => navigate("/crud2"));
  };

  return (
    <>
      <Layout>
        <Box>
          <Box
            sx={{
              margin: "30px",
              textAlign: "center",
            }}
          >
            <h1>Edit Users</h1>
          </Box>
          <Box
            sx={{
              width: 800,
              maxWidth: "100%",
              margin: "auto",
              padding: "30px",
            }}
          >
            <TextField
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              fullWidth
              label="Enter Your Name"
              id="margin-dense"
              margin="dense"
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              fullWidth
              label="Enter Your E-mail"
              id="margin-dense"
              margin="dense"
            />
            <TextField
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="phone"
              fullWidth
              label="Enter Your Number"
              id="margin-dense"
              margin="dense"
            />
            <Box
              sx={{
                marginTop: "30px",
                "& button": {
                  padding: "10px 40px",
                  backgroundColor: "black",
                  color: "white",
                },
                "& button: hover": {
                  backgroundColor: "black",
                },
              }}
            >
              <Button onClick={handelUpdate}>Update</Button>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Edit;
