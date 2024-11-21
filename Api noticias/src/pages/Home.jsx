import { HomeContainer, Image, TextOverlay, } from '../styles';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <HomeContainer>
            <Image src="public/perro-interesante.jpg" alt="Placeholder" />
            <TextOverlay>
                ¡Bienvenido a nuestro portal de noticias!
                <br />
                <br />
                <br />
                Visita nuestra sección de Noticias

                <br />
                <Link to="/page2">Noticias</Link>

            </TextOverlay>

        </HomeContainer>
    );
};

export default Home;