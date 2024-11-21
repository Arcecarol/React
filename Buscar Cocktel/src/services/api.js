import axios from 'axios';

export const fetchCocktail = async (name) => {
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        return response.data.drinks ? response.data.drinks[0] : null;
    } catch (error) {
        throw new Error('Error fetching the cocktail');
    }
};