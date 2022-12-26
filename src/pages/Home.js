import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../app/assets/imgs/logo-text.PNG';
import yellowHatDog from '../app/assets/imgs/thumbnails/digital/dog-hat_crop2.jpg';
import kristiTrees from '../app/assets/imgs/thumbnails/tattoo/kristi-trees.jpg';
import catWindow from '../app/assets/imgs/thumbnails/acrylic/luna.jpg';

const Home = () => {

    return (
        <Container>
            <Row className='text-center my-4'>
                <Col md='6' lg='5' className='offset-lg-1'>
                    <NavLink className='nav-link' to='/art'>
                        <img className='indexLogo' src={logo} alt='logo' />
                    </NavLink>
                </Col>
                <Col md='6' lg='5' className='align-self-center text-start'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Col>
            </Row>
            <Row className='text-center my-5'>
                <Col xs md='6' lg='4'>
                    <NavLink className='nav-link' to='/'>
                        <img className='featuredImg' src={yellowHatDog} alt='Yellow Hat Dog' />
                    </NavLink>
                </Col>
                <Col xs md='6' lg='4'>
                    <NavLink className='nav-link' to='/'>
                        <img className='featuredImg' src={kristiTrees} alt='Kristi Trees' />
                    </NavLink>
                </Col>
                <Col xs lg='4'>
                    <NavLink className='nav-link' to='/'>
                        <img className='featuredImg' src={catWindow} alt='Cat Window' />
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;