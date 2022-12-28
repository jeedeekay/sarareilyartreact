import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectGallerybyId } from '../features/gallery/gallerySlice';
import GalleryDetail from '../features/gallery/GalleryDetail';

const GalleryDetailPage = () => {
    const { artworkId } = useParams();
    const artwork = useSelector(selectGallerybyId(artworkId));
    
    return (
        <Container className='my-5'>
            <GalleryDetail artwork={artwork} />
        </Container>
    );
};

export default GalleryDetailPage;