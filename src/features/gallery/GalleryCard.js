import { Card, CardImg } from 'reactstrap';

const GalleryCard = ({ artwork }) => {
    const { name, thumbnail } = artwork;
    return (
        <Card>
            <CardImg src={thumbnail} alt={name} />
        </Card>
    );
}

export default GalleryCard;