import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import {BackEndErrors} from 'src/app/shared/models/back-end-errors.model';
import {User} from 'src/app/shared/models/user.model';
import {LoginUserReques} from '../models/login-request.model';
import {RegisterUserRequest} from '../models/register-request.model';

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'Register User': props<{user: RegisterUserRequest}>(),
        'Register User Success': props<User>(),
        'Register User Failure': props<{errors: BackEndErrors}>(),

        'Login User': props<{user: LoginUserReques}>(),
        'Login User Success': props<User>(),
        'Login User Failure': props<{errors: BackEndErrors}>(),

        'Get Current User': emptyProps(),
        'Get Current User Success': props<User>(),
        'Get CUrrent User Failure': emptyProps(),
    },
});
