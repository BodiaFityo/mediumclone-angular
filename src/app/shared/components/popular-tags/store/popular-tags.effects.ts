import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {PopularTagsService} from '../services/popular-tags.service';
import {popularTagsActions} from './popular-tags.actions';

export const getPopularTagsEffect = createEffect(
    (
        actions$ = inject(Actions),
        popularTagsService = inject(PopularTagsService)
    ) => {
        return actions$.pipe(
            ofType(popularTagsActions.getPopularTags),
            switchMap(() => {
                return popularTagsService.getPopularTags().pipe(
                    map((tags: string[]) =>
                        popularTagsActions.getPopularTagsSuccess({tags})
                    ),
                    catchError((error) =>
                        of(popularTagsActions.getPopularTagsFailure({error}))
                    )
                );
            })
        );
    },
    {functional: true}
);
