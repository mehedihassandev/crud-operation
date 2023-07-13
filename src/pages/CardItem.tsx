import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface ICardData {
  id: string;
  img: string;
  title: string;
  dec: string;
  button: string;
}

interface CardItemProps {
  CardData: ICardData[];
}
const CardItem: React.FC<CardItemProps> = ({ CardData }) => {
  return (
    <>
      <Grid container spacing={2}>
        {CardData.map((CardData, index) => {
          return (
            <Grid item xs={4}>
              <Box
                sx={{
                  margin: "30px 30px",
                }}
              >
                <Card key={index}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={CardData.img}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {CardData.title.slice(0, 36)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {CardData.dec.slice(0, 300)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    sx={{
                      "& a": {
                        padding: "10px 30px",
                        backgroundColor: "black",
                        color: "white",
                        textDecoration: "none",
                        marginBottom: "20px",
                        marginLeft: "10px",
                      },
                    }}
                  >
                    <Link to={`/details/${CardData.id}`}>
                      {CardData.button}
                    </Link>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CardItem;
