import {
    Container,
    Row,
    Col
} from 'reactstrap';
import ContactForm from '../components/ContactForm';

const Contact = () => {

    window.scrollTo(0, 0);

    return (
        <Container className='my-4'>
            <Row>
                <Col xs='12'>
                    <h2>Inquiries</h2>
                </Col>
                <Col md='8' className='offset-md-2'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;