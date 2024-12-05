import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';

function App() {
    const [recipes, setRecipes] = useState([
        { name: "Spaghetti Bolognese", description: "Rich tomato-based pasta dish." },
        { name: "Chicken Curry", description: "A spicy and savory curry." },
    ]);

    const addRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/read" element={<Read recipes={recipes} />} />
                <Route path="/create" element={<Create addRecipe={addRecipe} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
