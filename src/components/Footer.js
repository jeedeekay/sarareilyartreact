import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='bg-light'>
            <Container>
                <Row>
                    <Col>
                        <ul className='px-0'>
                            <li>
                                Home
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;