import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const GalleryCard = ({ artwork }) => {
    const { id, name, thumbnail } = artwork;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg src={thumbnail} alt={name} />
            </Card>
        </Link>
    );
}

export default GalleryCard;