import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import circleLogo from '../app/assets/imgs/logo-circle.PNG';
import easterEgg from '../app/assets/imgs/logo-easterEgg.jpg';

const Footer = () => {
    return (
        <footer className='bg-light'>
            <Container>
                <Row className='mx-5 px-5 pt-3'>
                    <Col md='3' className='text-md-start'>
                        <ul className='px-0'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/art'>Art</Link>
                            </li>
                            <li>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md='3' className='order-md-last text-md-end'>
                        <ul className='px-0'>
                            <li>
                                <a href='https://www.facebook.com/sarareilyart'>
                                    <i className='fa fa-facebook fa-lg' />
                                    <span> Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/sarareily/'>
                                    <i className='fa fa-instagram fa-lg' />
                                    <span> Instagram</span>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md='6' className='align-self-center'>
                        <ul className='px-0'>
                            <li>
                                <a href={easterEgg}>
                                    <img id='footerLogo' className='my-2' src={circleLogo} alt='Circle Logo' />
                                </a>
                            </li>
                            <li>
                                <h6>SARA REILY ART</h6>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className='bg-secondary m-0 p-3'>
                <h6 className='text-light m-0 p-0'>2022 Copyright: sarareilyart.com</h6>
            </div>
        </footer>
    );
};

export default Footer;