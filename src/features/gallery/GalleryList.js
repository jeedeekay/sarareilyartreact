import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { selectGalleryByMedia } from './gallerySlice';
import GalleryCard from './GalleryCard';

const GalleryList = ({ media }) => {
    const gallery = useSelector(selectGalleryByMedia(media));
    console.log(gallery);

    return (
        <Row>
            {gallery.map((artwork) => {
                return (
                    <Col md='5' lg='3' className='img-thumbnail m-1' key={artwork.name}>
                        <GalleryCard artwork={artwork} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default GalleryList;