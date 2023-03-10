import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { selectThumbnailByName } from './gallerySlice';
import { useSelector } from 'react-redux';

const GalleryCard = ({ artwork }) => {
    const { name } = artwork;
    const { thumbnail } = useSelector(selectThumbnailByName(name));
    console.log('thumbnail: ' + thumbnail)
    return (
        <Link to={`${name}`}>
            <Card>
                <CardImg src={thumbnail} alt={name} />
            </Card>
        </Link>
    );
}

export default GalleryCard;