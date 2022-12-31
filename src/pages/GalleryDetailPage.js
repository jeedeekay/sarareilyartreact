import { useSelector } from 'react-redux';
import { Container} from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectGalleryByName } from '../features/gallery/gallerySlice';
import GalleryDetail from '../features/gallery/GalleryDetail';

const GalleryDetailPage = () => {

    window.scrollTo(0, 0);

    const { name } = useParams();
    const artwork = useSelector(selectGalleryByName(name));
    
    return (
        <Container className='my-5'>
            <GalleryDetail artwork={artwork} />
        </Container>
    );
};

export default GalleryDetailPage;