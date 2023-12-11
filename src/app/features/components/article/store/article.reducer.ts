import {routerNavigationAction} from '@ngrx/router-store';
import {createFeature, createReducer, on} from '@ngrx/store';
import {ArticleStateInterface} from '../models/article-state.model';
import {articleActions} from './article.actions';

export const initialState: ArticleStateInterface = {
    isLoading: false,
    article: null,
    errors: null,
};

const articleFeature = createFeature({
    name: 'article',
    reducer: createReducer(
        initialState,
        on(articleActions.loadArticle, (state) => ({
            ...state,
            isLoading: true,
        })),
        on(articleActions.loadArticleSuccess, (state, {article}) => ({
            ...state,
            article: article,
            isLoading: false,
            errors: null,
        })),
        on(articleActions.loadArticleFailure, (state) => ({
            ...state,
            isLoading: false,
            errors: null,
        })),
        on(routerNavigationAction, () => initialState)
    ),
});

export const {
    name: articleFeatureKey,
    reducer: articleReducer,
    selectArticle,
    selectIsLoading,
} = articleFeature;
