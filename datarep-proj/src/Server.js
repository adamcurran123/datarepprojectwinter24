const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// In-memory storage for recipes
let recipes = [];

// Basic route
app.get('/', (req, res) => {
    res.send('Express Server is up and running');
});

// POST route to add a recipe
app.post('/api/recipes', (req, res) => {
    const { name, description } = req.body;
    const newRecipe = { name, description };
    recipes.push(newRecipe);
    console.log(`Added Recipe: ${name}`);
    res.json({ message: 'Recipe added successfully', recipe: newRecipe });
});

// GET route to retrieve all recipes
app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
