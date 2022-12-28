import { Row, Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const GalleryDetail = ({ artwork }) => {
    const { name, image, thumbnail } = artwork;

    return (
        <Row>
            <Col md='6' className='m-1'>
                <Card>
                    <a href={image}>
                        <CardImg top src={thumbnail} alt={name} />
                    </a>
                </Card>
            </Col>
            <Col md='4' className='align-self-center'>
                <h4>{name}</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Col>
        </Row>
    );
}

export default GalleryDetail;