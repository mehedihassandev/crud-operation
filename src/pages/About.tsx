import { Box, Grid } from "@mui/material";
import {} from "@mui/material/styles";
import Layout from "../components/Layout/Layout";
const About = () => {
  return (
    <Layout>
      <Box sx={{ flexGrow: 1, margin: "30px 30px" }}>
        <Grid container>
          <Grid item xs={6}>
            <Box
              sx={{
                margin: "0px 100px",
                "& h2": {
                  fontSize: "42px",
                  fontWeight: "400",
                  paddingBottom: "30px",
                },
                "& p": {
                  fontSize: "16px",
                  lineHeight: "24px",
                },
              }}
            >
              <h2>Nice To Meet You</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus sequi totam inventore enim nobis harum corporis ea
                eveniet optio explicabo sed assumenda reiciendis, necessitatibus
                unde dicta culpa atque eius autem quia debitis voluptas rerum
                iusto? Pariatur voluptate non molestiae a labore repellat esse
                et temporibus harum? Cum et sequi atque quae molestiae
                distinctio perferendis? Repudiandae neque expedita error dolores
                nisi cum maxime doloremque eveniet commodi voluptatum
                accusantium vitae cumque deleniti, rem veniam dolore sapiente
                tempora atque aspernatur et libero velit. Distinctio commodi
                quam unde cumque cupiditate repudiandae nisi quas, labore
                minima. Voluptatum iusto nam reprehenderit quisquam eveniet
                veniam praesentium harum?
              </p>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                margin: "auto",
                "& img": {
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1612550761236-e813928f7271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="about"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default About;
