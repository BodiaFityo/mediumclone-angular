import {state} from '@angular/animations';
import {routerNavigationAction} from '@ngrx/router-store';
import {createReducer, createFeature, on} from '@ngrx/store';
import {AuthStateInterface} from '../models/auth-state.model';
import {authActions} from './auth.actions';

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: true,
    user: null,
    errors: null,
};

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(authActions.registerUser, (state) => ({
            ...state,
            isSubmitting: true,
            errors: null,
        })),
        on(authActions.registerUserSuccess, (state, user) => ({
            ...state,
            user,
            isSubmitting: false,
        })),
        on(authActions.registerUserFailure, (state, {errors}) => ({
            ...state,
            isSubmitting: false,
            errors: errors,
        })),
        on(authActions.loginUser, (state) => ({
            ...state,
            isSubmitting: true,
            errors: null,
        })),
        on(authActions.loginUserSuccess, (state, user) => ({
            ...state,
            user,
            isSubmitting: false,
        })),
        on(authActions.loginUserFailure, (state, {errors}) => ({
            ...state,
            isSubmitting: false,
            errors: errors,
        })),
        on(authActions.getCurrentUser, (state) => ({
            ...state,
            isLoading: true,
        })),
        on(authActions.getCurrentUserSuccess, (state, user) => ({
            ...state,
            user,
            isLoading: false,
        })),
        on(authActions.getCUrrentUserFailure, (state) => ({
            ...state,
            isLoading: false,
            user: null,
            errors: null,
        })),
        on(routerNavigationAction, () => initialState)
    ),
});

export const {
    name: authFeatureKey,
    reducer: authReducer,
    selectIsSubmitting,
    selectUser,
    selectErrors,
    selectIsLoading,
} = authFeature;
