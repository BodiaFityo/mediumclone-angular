import {HttpErrorResponse} from '@angular/common/http';
import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {UserProfileService} from '../services/user-profile.service';
import {userProfileActions} from './user-profile.actions';

export const loadUserProfileEffect = createEffect(
    (
        actions$ = inject(Actions),
        userProfileService = inject(UserProfileService)
    ) => {
        return actions$.pipe(
            ofType(userProfileActions.loadUserProfile),
            switchMap(({request}) =>
                userProfileService.loadUserProfile(request).pipe(
                    map(({profile}) =>
                        userProfileActions.loadUserProfileSuccess({profile})
                    ),
                    catchError((error: HttpErrorResponse) =>
                        of(
                            userProfileActions.loadUserProfileFailure({
                                error: error.error,
                            })
                        )
                    )
                )
            )
        );
    },
    {
        functional: true,
    }
);
