import {HttpErrorResponse} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {User} from 'src/app/shared/models/user.model';
import {TokenService} from 'src/app/shared/services/token.service';
import {AuthService} from '../services/auth.service';
import {authActions} from './auth.actions';

export const registerUserEffect = createEffect(
    (
        actions$ = inject(Actions),
        authService = inject(AuthService),
        tokenService = inject(TokenService)
    ) => {
        return actions$.pipe(
            ofType(authActions.registerUser),
            switchMap(({user}) => {
                return authService.register(user).pipe(
                    map((user: User) => {
                        tokenService.set(user.token);
                        return authActions.registerUserSuccess(user);
                    }),
                    catchError((errors: HttpErrorResponse) => {
                        return of(
                            authActions.registerUserFailure(errors.error)
                        );
                    })
                );
            })
        );
    },
    {functional: true}
);

export const loginUserEffect = createEffect(
    (
        actions$ = inject(Actions),
        authService = inject(AuthService),
        tokenService = inject(TokenService)
    ) => {
        return actions$.pipe(
            ofType(authActions.loginUser),
            switchMap(({user}) => {
                return authService.login(user).pipe(
                    map((user: User) => {
                        tokenService.set(user.token);
                        return authActions.loginUserSuccess(user);
                    }),
                    catchError((errors: HttpErrorResponse) =>
                        of(authActions.loginUserFailure(errors.error))
                    )
                );
            })
        );
    },
    {functional: true}
);

export const getCurrentUserEffect = createEffect(
    (
        actions$ = inject(Actions),
        authService = inject(AuthService),
        tokenService = inject(TokenService)
    ) => {
        return actions$.pipe(
            ofType(authActions.getCurrentUser),
            switchMap(() => {
                const token = tokenService.get();
                if (!token) {
                    return of(authActions.getCUrrentUserFailure());
                }
                return authService.getCurrentUser().pipe(
                    map((user) => authActions.getCurrentUserSuccess(user)),
                    catchError((errors: HttpErrorResponse) =>
                        of(authActions.getCUrrentUserFailure())
                    )
                );
            })
        );
    },
    {functional: true}
);

export const redirecAfterLoginEffect = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
        return actions$.pipe(
            ofType(authActions.loginUserSuccess),
            tap(() => router.navigateByUrl('/'))
        );
    },
    {functional: true, dispatch: false}
);

export const redirectAfterRegistrationEffect = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
        return actions$.pipe(
            ofType(authActions.registerUserSuccess),
            tap(() => router.navigateByUrl('/'))
        );
    },

    {functional: true, dispatch: false}
);
