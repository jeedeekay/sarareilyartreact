import { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavbarToggler
} from 'reactstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='bg-white shadow'>
            <Container >
                <Row>
                    <Col xs='2'>
                        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                        <i id='navButton' role='button' classname='fa fa-bars fa-lg d-sm-none p-2 mt-3'/>
                    </Col>
                    <Col xs='8' sm='12'>
                        <h1 className='text-center display-3 d-none d-sm-none d-md-block my-2'>Sara Reily Art</h1>
                        <h1 className='text-center display-4 d-none d-sm-block d-md-none mt-3'>Sara Reily Art</h1>
                        <h1 className='text-center d-sm-none mt-3'>Sara Reily Art</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Navbar dark sticky='top' expand='md'>
                            <Collapse isOpen={menuOpen} navbar>
                                <Nav>
                                    <NavItem>
                                        
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;