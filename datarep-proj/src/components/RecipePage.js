import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MasterStyle.css';

const Read = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/recipes')
            .then((response) => {
                setRecipes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/api/recipe/${id}`)
            .then((response) => {
                setRecipes(recipes.filter(recipe => recipe._id !== id));
                alert('Recipe deleted successfully');
            })
            .catch((error) => {
                console.error("Error deleting recipe:", error);
            });
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`); 
    };

    return (
        <div>
            <h3>Our Favourites:</h3>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        <h4>{recipe.name}</h4>
                        <p>{recipe.description}</p>
                        <button onClick={() => handleEdit(recipe._id)}>Edit</button>
                        <button onClick={() => handleDelete(recipe._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Read;
