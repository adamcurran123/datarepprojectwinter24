import { useEffect, useState } from 'react';
import axios from 'axios';
import './MasterStyle.css';

const Read = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/recipes')
            .then((response) => {
                setRecipes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
            });
    }, []);

    return (
        <div>
            <h3>Recipes</h3>
            <ul>
                {recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <li key={index}>
                            <h4>{recipe.name}</h4>
                            <p>{recipe.description}</p>
                        </li>
                    ))
                ) : (
                    <p>No recipes available. Add some!</p>
                )}
            </ul>
        </div>
    );
};

export default Read;
