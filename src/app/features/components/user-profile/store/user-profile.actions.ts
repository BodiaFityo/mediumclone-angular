import {createActionGroup, props} from '@ngrx/store';
import {Profile} from 'src/app/shared/models/profile.model';
import {UserProfileRequest} from '../models/user-profile-request.model';

export const userProfileActions = createActionGroup({
    source: 'User Profile',
    events: {
        'Load User Profile': props<{request: UserProfileRequest}>(),
        'Load User Profile Success': props<{profile: Profile}>(),
        'Load User Profile Failure': props<{error: string}>(),
    },
});
