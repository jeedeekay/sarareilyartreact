import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import FeaturedGalleryCard from './FeaturedGallerCard';
import { selectGalleryByFeatured } from './gallerySlice';

const FeaturedGalleryList = () => {
    const gallery = useSelector(selectGalleryByFeatured);
    console.log(gallery);

    return (
        <Row>
            {gallery.map((artwork) => {
                    return (
                    <Col
                        className={`
                        mt-4
                        align-self-center
                            ${gallery.indexOf(artwork) < 2 ? 'col-12 col-sm-6 col-lg-4' : 'offset-sm-3 col-sm-6 offset-lg-0 col-lg-4'}
                            `}
                        key={artwork.name}>
                        <FeaturedGalleryCard artwork={artwork} />
                    </Col>
                );              
            })}
        </Row>
    )
}

export default FeaturedGalleryList;