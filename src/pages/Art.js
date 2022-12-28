import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';
import GalleryList from '../features/gallery/GalleryList';
import { useState } from 'react';

const Art = () => {
    const [ media, setMedia ] = useState('all');
    return (
        <Container className='my-5'>
            <Row>
                <Col sm='3' md='2'>
                    <Nav fill className='sticky-top flex-sm-column nav-pills'>
                        <NavItem>
                            <NavLink className={`text-secondary fw-bold ${media === 'all' ? 'active' : ''}`} onClick={() => setMedia('all')}>All</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={`text-secondary fw-bold ${media === 'digital' ? 'active' : ''}`} onClick={() => setMedia('digital')}>Digital</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={`text-secondary fw-bold ${media === 'acrylic' ? 'active' : ''}`} onClick={() => setMedia('acrylic')}>Acrylic</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={`text-secondary fw-bold ${media === 'tattoo' ? 'active' : ''}`} onClick={() => setMedia('tattoo')}>Tattoos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={`text-secondary fw-bold ${media === 'doodle' ? 'active' : ''}`} onClick={() => setMedia('doodle')}>Doodles</NavLink>
                        </NavItem>
                    </Nav>
                </Col>
                <Col>
                    <GalleryList media={media}/>
                </Col>
            </Row>
            
            
        </Container>
    );
};

export default Art;