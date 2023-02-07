import { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header xs='12' className='bg-white shadow'>
            <Container >
                <Row>
                    <Col xs='2'>
                        <i id='navButton' role='button' className='fa fa-bars fa-lg d-md-none d-flex p-2 mt-4' onClick={() => setMenuOpen(!menuOpen)} />
                    </Col>
                    <Col xs='8' sm='8' md='12'>
                        <h1 className='text-center display-2 d-none d-sm-none d-md-block my-2'>Sara Reily Art</h1>
                        <h1 className='text-center display-4 d-none d-sm-block d-md-none mt-3'>Sara Reily Art</h1>
                        <h1 className='text-center d-sm-none mt-4'>Sara Reily Art</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Navbar id='reilyNavBar' dark sticky='top' expand='md' className='mb-0 pb-0'>
                            <Collapse isOpen={menuOpen} navbar>
                                <Nav className='navbar-nav w-100 nav-fill'>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/'>
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/about'>
                                            About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/art'>
                                            Art
                                        </NavLink>
                                    </NavItem>
                                    {/* <NavItem>
                                        <NavLink className='nav-link' to='/shop'>
                                            Shop
                                        </NavLink>
                                    </NavItem> */}
                                    <NavItem>
                                        <NavLink className='nav-link' to='/contact'>
                                            Contact
                                        </NavLink>
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