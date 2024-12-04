import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Read from './Read';
import Create from './Create';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Create">Create</Nav.Link>
                    <Nav.Link href="/Read">Read</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
