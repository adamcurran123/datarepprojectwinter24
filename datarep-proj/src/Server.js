const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

// cors middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection to db
const dbURI = 'mongodb+srv://admin:admin24@datarepcluster.qxw0b.mongodb.net/DataRepCluster?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log('Database connection error: ', err));

// recipe schema/model to pass to db
const recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
});
const Recipe = mongoose.model('Recipe', recipeSchema);

app.get('/', (req, res) => {
    res.send('Express Server is up and running');
});

// post route to add  recipe
app.post('/api/recipes', async (req, res) => {
    const { name, description } = req.body;
    const newRecipe = new Recipe({ name, description });
    await newRecipe.save();
    res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
});

// get route to get all recipes
app.get('/api/recipes', async (req, res) => {
    const recipes = await Recipe.find({});
    res.json(recipes);
});

// get route to retrieve a recipe
app.get('/api/recipe/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.send(recipe);
});

// put route for updating a recipe
app.put('/api/recipe/:id', async (req, res) => {
    try {
        const { name, description } = req.body;
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            { name, description },
            { new: true } 
        );
        if (!updatedRecipe) {
            return res.status(404).send('Recipe not found');
        }
        res.json({ message: 'Recipe updated successfully', recipe: updatedRecipe });
    } catch (err) {
        res.status(500).send('Error updating recipe');
    }
});

// route for removing a recipe 
app.delete('/api/recipe/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.json({ message: 'Recipe deleted successfully', recipe });
    } catch (err) {
        res.status(500).send('Error deleting recipe');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
