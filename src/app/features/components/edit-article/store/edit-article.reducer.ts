import {createFeature, createReducer, on} from '@ngrx/store';
import {editArticleState} from '../models/edit-article-state.model';
import {editArticleActions} from './edit-article.actions';
import {routerNavigationAction} from '@ngrx/router-store';

export const initialState: editArticleState = {
    article: null,
    isLoading: false,
    isSubmitting: false,
    errors: null,
};

const editArticleFeature = createFeature({
    name: 'editArticle',
    reducer: createReducer(
        initialState,
        on(editArticleActions.getArticle, (state) => ({
            ...state,
            isLoading: true,
        })),
        on(editArticleActions.getArticleSuccess, (state, {article}) => ({
            ...state,
            article,
            isLoading: false,
        })),
        on(editArticleActions.editArticle, (state) => ({
            ...state,
            isLoading: true,
            isSubmitting: true,
        })),
        on(editArticleActions.editArticleSuccess, (state, {article}) => ({
            ...state,
            isLoading: false,
            isSubmitting: false,
            article,
        })),
        on(editArticleActions.editArticleFailure, (state, {errors}) => ({
            ...state,
            isLoading: false,
            isSubmitting: false,
            errors,
        })),
        on(routerNavigationAction, () => initialState)
    ),
});

export const {
    name: editArticleFeatureKey,
    reducer: editArticleReducer,
    selectArticle,
    selectIsLoading,
    selectErrors,
    selectIsSubmitting,
} = editArticleFeature;
