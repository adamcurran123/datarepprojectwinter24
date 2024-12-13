const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection string
const dbURI = 'mongodb+srv://admin:admin24@datarepcluster.qxw0b.mongodb.net/DataRepCluster?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log('Database connection error: ', err));

// Recipe Schema and Model
const recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
});
const Recipe = mongoose.model('Recipe', recipeSchema);

// Basic route
app.get('/', (req, res) => {
    res.send('Express Server is up and running');
});

// POST route to add a recipe
app.post('/api/recipes', async (req, res) => {
    const { name, description } = req.body;
    const newRecipe = new Recipe({ name, description });
    await newRecipe.save();
    res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
});

// GET route to retrieve all recipes
app.get('/api/recipes', async (req, res) => {
    const recipes = await Recipe.find({});
    res.json(recipes);
});

// GET route to retrieve a recipe by ID
app.get('/api/recipe/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.send(recipe);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
