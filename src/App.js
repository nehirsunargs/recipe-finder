import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

function App() {
    const [recipes, setRecipes] = useState([]);

    const handleSearch = (query) => {
        if (!query) {
            setRecipes([]);
            return;
        }

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(response => response.json())
            .then(data => {
                if (data.meals) {
                    setRecipes(data.meals);
                } else {
                    setRecipes([]);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setRecipes([]);
            });
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default App;
