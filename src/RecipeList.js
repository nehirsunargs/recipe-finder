import React from 'react';

function RecipeList({ recipes }) {
    if (!recipes || recipes.length === 0) {
        return <p>No recipes found. Try different ingredients!</p>;
    }

    return (
        <ul>
            {recipes.map((recipe, index) => (
                <li key={index}>
                    <h3>{recipe.strMeal}</h3>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <p>{recipe.strInstructions ? recipe.strInstructions.substring(0, 100) + '...' : ''}</p>
                </li>
            ))}
        </ul>
    );
}

export default RecipeList;
