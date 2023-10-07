import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthStateInterface} from './models/auth-state.model';
import {LoginUserReques} from './models/login-request.model';
import {RegisterUserRequest} from './models/register-request.model';
import {authActions} from './store/auth.actions';
import {
    selectIsSubmitting,
    selectErrors,
    selectUser,
} from './store/auth.reducer';

@Injectable({
    providedIn: 'root',
})
export class AuthFacade {
    readonly isSubmitting$ = this.store.select(selectIsSubmitting);
    readonly isBackendErrors$ = this.store.select(selectErrors);
    readonly currentUser$ = this.store.select(selectUser);

    constructor(private store: Store<{auth: AuthStateInterface}>) {}

    registerUser(user: RegisterUserRequest): void {
        this.store.dispatch(authActions.registerUser({user}));
    }

    loginUser(user: LoginUserReques): void {
        this.store.dispatch(authActions.loginUser({user}));
    }

    getCurrentUser(): void {
        this.store.dispatch(authActions.getCurrentUser());
    }
}
