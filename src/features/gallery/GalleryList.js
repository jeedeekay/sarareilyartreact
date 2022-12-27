import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import { selectAllGallery } from './gallerySlice';
import { selectGalleryByMedia } from './gallerySlice';
import GalleryCard from './GalleryCard';

const GalleryList = ({ media }) => {
    const gallery = useSelector(selectGalleryByMedia(media));
    console.log(gallery);

    return (
        <Row>
            {gallery.map((artwork) => {
                return (
                    <Col md='5' lg='3' className='img-thumbnail m-1'>
                        <GalleryCard artwork={artwork} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default GalleryList;