import { useState, useEffect } from 'react';
import { getNotice } from '../services/api';
import { Box2, Container } from '../styles';
import { Box, Grid } from '../../../ejerciciciosreactapi/vinos/src/styles';


const Home = () => {
    const [Enunciados, setEnunciados] = useState([]);
    const [filteredNotice, setFilteredNotice] = useState([]);
    const [favorites, setFavorites] = useState([]);


    useEffect(() => {
        const getAnuncio = async () => {
            const data = await getNotice();
            setEnunciados(data);
            setFilteredNotice(data);
        };

        getAnuncio();
    }, []);

    const handleClick = (Enunciados) => {
        setFavorites([...favorites, Enunciados]);
    };

    const handleDelete = (id) => {
        setFavorites(favorites.filter((Enunciados) => Enunciados.id !== id));
    };

    return (
        <Container>
            <h1>Noticias</h1>
            <ul>
                {filteredNotice.map((noticias) => (
                    <Box2 key={noticias.id} onClick={() => handleClick(noticias)}>
                        <li>
                            <h2>{noticias.title.rendered}</h2>
                            <p><strong>titulo:</strong> {noticias.title.rendered}</p>
                            <p><strong>fecha:</strong> {noticias.date}</p>
                        </li>
                    </Box2>
                ))}
            </ul>
            <hr></hr>
            <h2> Favoritos </h2>
            {
                <Grid>
                    {favorites?.map((noticias) => (
                        <Box key={noticias.id} onClick={() => handleDelete(noticias.id)}>
                            <li>
                                <h2>{noticias.title.rendered}</h2>
                                <p><strong>titulo:</strong> {noticias.title.rendered}</p>
                                <p><strong>fecha:</strong> {noticias.date}</p>
                            </li>
                        </Box>
                    ))}
                </Grid>
            }
        </Container>
    );
};

export default Home;

