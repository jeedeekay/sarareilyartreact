import { createSlice } from '@reduxjs/toolkit';
import { GALLERY } from '../../app/shared/GALLERY';
import { THUMBNAILS } from '../../app/shared/THUMBNAILS';

const initialState = {
    galleryArray: GALLERY,
    thumbnailsArray: THUMBNAILS
};

const gallerySlice = createSlice({
    name: 'gallery',
    initialState
});

export const galleryReducer = gallerySlice.reducer;

export const selectAllGallery = (state) => {
    return state.gallery.galleryArray;
};

export const selectGalleryByMedia = (media) => (state) => {
    if (media === 'all') {
        return state.gallery.galleryArray;
    }
    return state.gallery.galleryArray.filter((artwork) => artwork.media === media);
}

export const selectGalleryByName = (name) => (state) => {
    return state.gallery.galleryArray.find((artwork) => artwork.name === name);
}

export const selectGalleryById = (id) => (state) => {
    return state.gallery.galleryArray.find((artwork) => artwork.id === parseInt(id));
}

export const selectGalleryByFeatured = (state) => {
    return state.gallery.galleryArray.filter((artwork) => artwork.featured === true);
}

export const selectThumbnailByName = (artwork) => (state) => {
    return state.gallery.thumbnailsArray.find((thumbnail) => thumbnail.name === artwork+' Thumbnail');
}