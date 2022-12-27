import { createSlice } from '@reduxjs/toolkit';
import { GALLERY } from '../../app/shared/GALLERY';

const initialState = {
    galleryArray: GALLERY
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