import {createFeature, createReducer, on} from '@ngrx/store';
import {PopularTagsState} from '../models/popular-tags-state.model';
import {popularTagsActions} from './popular-tags.actions';

const initialState: PopularTagsState = {
    isLoading: false,
    error: null,
    tags: null,
};

const popularTagsFeature = createFeature({
    name: 'popularTags',
    reducer: createReducer(
        initialState,
        on(popularTagsActions.getPopularTags, (state) => ({
            ...state,
            isLoading: true,
            error: null,
        })),
        on(popularTagsActions.getPopularTagsSuccess, (state, {tags}) => ({
            ...state,
            isLoading: false,
            tags,
        })),
        on(popularTagsActions.getPopularTagsFailure, (state, {error}) => ({
            ...state,
            isLoading: false,
            error: error,
        }))
    ),
});

export const {
    name: popularTagsFeatureKey,
    reducer: popularTagsReducer,
    selectTags,
    selectIsLoading,
} = popularTagsFeature;
