import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import navItem from "../../data/NavItem";

const privacyPolicy = "Terms of Use - Privacy Policy";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "black",
          padding: "10px 0",
        }}
      >
        <Box
          sx={{
            margin: "40px 0px",
            "& svg": {
              color: "white",
              fontSize: "32px",
              margin: "0px 10px",
              cursor: "pointer",
              transition: "all 400ms",
            },
            "& svg:hover": {
              color: "yellow",
              transform: "translateX(3px)",
            },
          }}
        >
          <FacebookIcon />
          <InstagramIcon />
          <GitHubIcon />
        </Box>

        <Box
          sx={{
            margin: "10px 0px",
            "& ul": {
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },

            "& li": {
              margin: "0px 20px",
            },
            "& li a": {
              textDecoration: "none",
              color: "white",
            },
          }}
        >
          <ul>
            {navItem.map((navItem, index) => {
              return (
                <li key={index}>
                  <Link to={navItem.link}>{navItem.title}</Link>
                </li>
              );
            })}
          </ul>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              color: "white",
            }}
          >
            {privacyPolicy}
          </Typography>
        </Box>

        <Box
          sx={{
            margin: "5px 0px",
            marginBottom: "40px",
          }}
        >
          <Typography sx={{ color: "white" }}>
            &copy; 2023 Md Mehedi Hassan
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
