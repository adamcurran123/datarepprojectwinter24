import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './MasterStyle.css';

const Edit = () => {
    const { id } = useParams();  // Get the recipe ID from the URL
    const navigate = useNavigate();  // For navigation after editing
    const [recipeName, setRecipeName] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');

    // Fetch the recipe data to edit
    useEffect(() => {
        axios.get(`http://localhost:4000/api/recipe/${id}`)
            .then((response) => {
                setRecipeName(response.data.name);
                setRecipeDescription(response.data.description);
            })
            .catch((error) => {
                console.error("Error fetching recipe:", error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedRecipe = {
            name: recipeName,
            description: recipeDescription,
        };

        axios.put(`http://localhost:4000/api/recipe/${id}`, updatedRecipe)
            .then((res) => {
                console.log(res.data);
                navigate('/read');  // Redirect after successful update
            })
            .catch((err) => {
                console.error("Error updating recipe:", err);
                alert('Failed to update recipe. Please try again.');
            });
    };

    return (
        <div>
            <h3>Edit Recipe</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Recipe Name:</label>
                    <input
                        type="text"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={recipeDescription}
                        onChange={(e) => setRecipeDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update Recipe</button>
            </form>
        </div>
    );
};

export default Edit;
