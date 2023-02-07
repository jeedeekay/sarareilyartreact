import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import GalleryList from '../features/gallery/GalleryList';
import { useState } from 'react';

const Art = () => {

    window.scrollTo(0, 0);

    const [ media, setMedia ] = useState('all');
    return (
        <Container className='my-5'>
            <Row>
                <Col sm='12' md='1' className='sticky-top bg-white pt-2'>
                    <Nav fill pills id='art-tab' className='sticky-top flex-md-column p-1'>
                        <NavItem>
                            <NavLink className={`text-secondary ${media === 'all' ? 'active text-white' : ''}`} onClick={() => setMedia('all')}>All</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={`text-secondary ${media === 'digital' ? 'active text-white' : ''}`} onClick={() => setMedia('digital')}>Digital</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={`text-secondary ${media === 'acrylic' ? 'active text-white' : ''}`} onClick={() => setMedia('acrylic')}>Acrylic</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={`text-secondary ${media === 'tattoo' ? 'active text-white' : ''}`} onClick={() => setMedia('tattoo')}>Tattoos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={`text-secondary ${media === 'doodle' ? 'active text-white' : ''}`} onClick={() => setMedia('doodle')}>Doodles</NavLink>
                        </NavItem>
                    </Nav>
                </Col>
                <Col sm className='offset-sm-0 offset-md-2 offset-lg-1'>
                    <GalleryList media={media}/>
                </Col>
            </Row>
            
            
        </Container>
    );
};

export default Art;