import {createFeature, createReducer, on} from '@ngrx/store';
import {UserProfileState} from '../models/user-profile-state.model';
import {userProfileActions} from './user-profile.actions';

export const initialState: UserProfileState = {
    profile: null,
    isLoading: false,
    errors: null,
};

const loadFeatureUserProfiel = createFeature({
    name: 'userProfile',
    reducer: createReducer(
        initialState,
        on(userProfileActions.loadUserProfile, (state) => ({
            ...state,
            isLoading: true,
        })),
        on(userProfileActions.loadUserProfileSuccess, (state, {profile}) => ({
            ...state,
            profile,
            isLoading: false,
        })),
        on(userProfileActions.loadUserProfileFailure, (state, {error}) => ({
            ...state,
            isLoading: false,
            errors: error,
        }))
    ),
});

export const {
    name: userProfileFatureKey,
    reducer: userProfileReducer,
    selectProfile,
    selectErrors,
    selectIsLoading,
} = loadFeatureUserProfiel;
