// App.jsx
import React, { useState } from 'react';
import { fetchCocktail } from './services/api.js';
import { Container } from './styles.js';

const App = () => {
  const [cocktail, setCocktail] = useState(null);
  const [cocktailName, setCocktailName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCocktailName(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchCocktail(cocktailName);
      setCocktail(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h1>Search for a Cocktail</h1>
      <input
        type="text"
        value={cocktailName}
        onChange={handleInputChange}
        placeholder="Enter cocktail name"
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cocktail ? (
        <div>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="200" />
          <p>{cocktail.strInstructions}</p>
          <ul>
            {Object.keys(cocktail)
              .filter((key) => key.startsWith('strIngredient') && cocktail[key])
              .map((key) => (
                <li key={key}>{cocktail[key]}</li>
              ))}
          </ul>
        </div>
      ) : (
        !loading && <p>No cocktail found</p>
      )}
    </Container>
  );
};

export default App;
