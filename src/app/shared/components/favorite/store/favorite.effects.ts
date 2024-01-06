import {inject} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {FavoriteService} from '../services/favorite.service';
import {favoriteActions} from './favorite.actions';

export const favoriteEffect = createEffect(
    (actions$ = inject(Actions), favoriteService = inject(FavoriteService)) => {
        return actions$.pipe(
            ofType(favoriteActions.addToFavorite),
            switchMap(({slug}) =>
                favoriteService.addToFavorite(slug).pipe(
                    map((article) =>
                        favoriteActions.addToFavoriteSuccess({article})
                    ),
                    catchError(() => of(favoriteActions.addToFavoriteFailure()))
                )
            )
        );
    },
    {
        functional: true,
    }
);

export const unFavoriteEffect = createEffect(
    (actions$ = inject(Actions), favoriteService = inject(FavoriteService)) => {
        return actions$.pipe(
            ofType(favoriteActions.unfavorite),
            switchMap(({slug}) =>
                favoriteService.unFavorite(slug).pipe(
                    map((article) =>
                        favoriteActions.unfavoriteSuccess({article})
                    ),
                    catchError(() => of(favoriteActions.unfavoriteFailure()))
                )
            )
        );
    },
    {
        functional: true,
    }
);
