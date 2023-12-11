import {createFeature, createReducer, on} from '@ngrx/store';
import {SettingsStateInterface} from '../models/settings-state.model';
import {authActions} from 'src/app/core/auth/store/auth.actions';
import {routerNavigatedAction} from '@ngrx/router-store';

const initialState: SettingsStateInterface = {
    isSubmitting: false,
    errors: null,
};

const settingsFeature = createFeature({
    name: 'settings',
    reducer: createReducer(
        initialState,
        on(authActions.updateUser, (state) => ({
            ...state,
            isSubmitting: true,
        })),
        on(authActions.updateUserSuccess, (state) => ({
            ...state,
            isSubmitting: false,
        })),
        on(authActions.updateUserFailure, (state, {error}) => ({
            ...state,
            isSubmitting: false,
            errors: error,
        })),
        on(routerNavigatedAction, () => initialState)
    ),
});

export const {
    name: settingFeatureKey,
    reducer: settingsReducer,
    selectIsSubmitting,
    selectErrors,
} = settingsFeature;
