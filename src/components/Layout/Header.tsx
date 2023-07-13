import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import navItem from "../../data/NavItem";
const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <TaskAltIcon
              sx={{
                color: "#671ddf",
              }}
            />
            <Typography
              sx={{
                marginLeft: "5px",
                flexGrow: "1",
              }}
            >
              Tasak One
            </Typography>

            <Box
              sx={{
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
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
