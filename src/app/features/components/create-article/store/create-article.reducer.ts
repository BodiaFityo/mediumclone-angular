import {createFeature, createReducer, on} from '@ngrx/store';
import {CreateArticleState} from '../models/create-article-state.model';
import {createArticleActions} from './create-article.actions';

const initialState: CreateArticleState = {
    isSubmitting: false,
    errors: null,
};

const createArticleFeature = createFeature({
    name: 'createArticle',
    reducer: createReducer(
        initialState,
        on(createArticleActions.createArticle, (state) => ({
            ...state,
            isSubmitting: true,
        })),
        on(createArticleActions.createArticleSuccess, (state) => ({
            ...state,
            isSubmitting: false,
        })),
        on(createArticleActions.createArticleFailure, (state, {errors}) => ({
            ...state,
            isSubmitting: false,
            errors,
        }))
    ),
});

export const {
    name: createArticleFeatureKey,
    reducer: createArticleReducer,
    selectErrors,
    selectIsSubmitting,
} = createArticleFeature;
