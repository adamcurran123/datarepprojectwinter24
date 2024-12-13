import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
    const [recipeName, setRecipeName] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipe = {
            name: recipeName,
            description: recipeDescription,
        };

        axios.post('http://localhost:4000/api/recipes', recipe)
            .then((res) => {
                console.log(res.data);
                setRecipeName('');
                setRecipeDescription('');
                navigate('/read');
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h3>Create a New Recipe</h3>
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
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default Create;
