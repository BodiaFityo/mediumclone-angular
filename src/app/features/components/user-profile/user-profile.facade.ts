import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserProfileRequest} from './models/user-profile-request.model';
import {UserProfileState} from './models/user-profile-state.model';
import {userProfileActions} from './store/user-profile.actions';
import {
    selectErrors,
    selectIsLoading,
    selectProfile,
} from './store/user-profile.reducer';

@Injectable()
export class UserProfileFacade {
    readonly getUserProfile$ = this.store.select(selectProfile);
    readonly isLoading$ = this.store.select(selectIsLoading);
    readonly error$ = this.store.select(selectErrors);

    constructor(private store: Store<UserProfileState>) {}

    loadUserProfile(request: UserProfileRequest): void {
        this.store.dispatch(userProfileActions.loadUserProfile({request}));
    }
}
