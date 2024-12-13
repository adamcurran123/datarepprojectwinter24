import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MasterStyle.css';
//Navbar routes etc
const NavigationBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">RecipeHaven</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                    <Nav.Link href="/create" className="nav-link">Post</Nav.Link>
                    <Nav.Link href="/recipes"className="nav-link">Recipes</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
