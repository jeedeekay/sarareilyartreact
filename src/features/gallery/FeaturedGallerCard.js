import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { selectThumbnailByName } from './gallerySlice';
import { useSelector } from 'react-redux';

const FeaturedGalleryCard = ({ artwork }) => {
    const { name } = artwork;
    const { thumbnail } = useSelector(selectThumbnailByName(name));
    console.log('thumbnail: ' + thumbnail)
    return (
        <Link to={`art/${name}`}>
            <Card className='shadow'>
                <CardImg src={thumbnail} alt={name} />
            </Card>
        </Link>
    );
}

export default FeaturedGalleryCard;