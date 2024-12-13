import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Content from './components/Content';
import RecipePage from './components/RecipePage'; 
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/recipes" element={<RecipePage />} /> 
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
