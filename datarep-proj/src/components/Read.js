import { useEffect } from 'react';
import './Read.css';

const Read = ({ recipes }) => {
    useEffect(() => {
        console.log("Updated recipes:", recipes);
    }, [recipes]);

    return (
        <div>
            <h3>Recipes</h3>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <h4>{recipe.name}</h4>
                        <p>{recipe.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Read;
