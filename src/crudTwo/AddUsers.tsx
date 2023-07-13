import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const AddUsers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  const navigate = useNavigate();

  const handelSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    axios
      .post("http://localhost:3004/students", data)
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
            <h1>Add Users</h1>
          </Box>
          <Box
            sx={{
              width: 800,
              maxWidth: "100%",
              margin: "auto",
              padding: "30px",

              "& button": {
                marginTop: "20px",
                padding: "10px 40px",
              },
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
            <Button onClick={handelSubmit} variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default AddUsers;
