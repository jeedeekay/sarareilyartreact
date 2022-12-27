import { Container, Button } from 'reactstrap';
import GalleryList from '../features/gallery/GalleryList';
import { useState } from 'react';

const Art = () => {
    const [ media, setMedia ] = useState('all');
    return (
        <Container>
            <Button onClick={() => setMedia('all')}>All</Button>
            <Button onClick={() => setMedia('digital')}>Digital</Button>
            <Button onClick={() => setMedia('acrylic')}>Acrylic</Button>
            <GalleryList media={media}/>
        </Container>
    );
};

export default Art;