import { useState, useEffect } from "react";
import { getCoffes } from "./services/api";
import { Box, Container, Grid } from "./styles";

function App() {
  const [coffes, setCoffes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    getCoffes().then((data) => {
      console.log("data");
      setCoffes(data);

    });
  }, []);

  const handleClick = (coffe) => {
    setFavorites([...favorites, coffe]);
  };

  const handleDelete = (id) => {
    setFavorites(favorites.filter((coffe) => coffe.id !== id));
  };

  return (
    <Container>
      <Grid>
        {coffes?.map((coffe) => (
          <Box key={coffe.id} onClick={() => handleClick(coffe)}>
            <img src={coffe.image} alt="" />
            <p>{coffe.title}</p>
          </Box>
        ))}
      </Grid>
      <h2> Favoritos </h2>
      {
        <Grid>
          {favorites?.map((coffe) => (
            <Box key={coffe.id} onClick={() => handleDelete(coffe.id)}>
              <img src={coffe.image} alt="" />
              <p>{coffe.title}</p>
            </Box>
          ))}
        </Grid>
      }
    </Container>
  )


};

export default App;