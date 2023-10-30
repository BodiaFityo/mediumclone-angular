import {routerNavigationAction} from '@ngrx/router-store';
import {createFeature, createReducer, on} from '@ngrx/store';
import {FeedState} from '../models/feed-state.model';
import {feedActions} from '../store/feed.actions';

const initialState: FeedState = {
    feed: null,
    isLoading: false,
    error: null,
};

const feedFeature = createFeature({
    name: 'feed',
    reducer: createReducer(
        initialState,
        on(feedActions.getFeed, (state) => ({
            ...state,
            isLoading: true,
            error: null,
        })),
        on(feedActions.getFeedSuccess, (state, feed) => ({
            ...state,
            feed: feed.feed,
            isLoading: false,
            error: null,
        })),
        on(feedActions.getFeedFailure, (state, error) => ({
            ...state,
            isLoading: false,
        })),
        on(routerNavigationAction, () => initialState)
    ),
});

export const {
    name: feedFeatureKey,
    reducer: feedReducer,
    selectFeed,
    selectIsLoading,
    selectError,
} = feedFeature;
