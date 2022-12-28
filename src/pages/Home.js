import { Container, Row, Col } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../app/assets/imgs/logo-text.PNG';
import kristiTrees from '../app/assets/imgs/thumbnails/tattoo/kristi-trees.jpg';
import { GALLERY } from '../app/shared/GALLERY';

const Home = () => {

    return (
        <Container>
            <Row className='text-center my-4'>
                <Col xs='12' lg='5' className='offset-0 offset-lg-1'>
                    <NavLink className='nav-link' to='/art'>
                        <img className='indexLogo' src={logo} alt='logo' />
                    </NavLink>
                </Col>
                <Col md='12' lg='4' className=' align-self-center text-start'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <Link to='/about'>Read more on the About Page <i className='fa fa-arrow-right'></i></Link>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col xs md='6' lg>
                    <a className='nav-link' href={GALLERY[2].image}>
                        <img className='featuredImg shadow' src={GALLERY[2].thumbnail} alt='Yellow Hat Dog' />
                    </a>
                </Col>
                <Col xs md='4' lg>
                    <a className='nav-link' href={kristiTrees}>
                        <img className='featuredImg shadow' src={kristiTrees} alt='Kristi Trees' />
                    </a>
                </Col>
                <Col xs>
                    <a className='nav-link' href={GALLERY[3].image}>
                        <img className='featuredImg shadow' src={GALLERY[3].thumbnail} alt='Cat Window' />
                    </a>
                </Col>
                <Link xs='12' to='/art' className='mb-4'>See more art in the Gallery <i className='fa fa-arrow-right' /></Link>
            </Row>
        </Container>
    );
};

export default Home;