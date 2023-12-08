import {HttpErrorResponse} from '@angular/common/http';
import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {CreateArticleService} from '../services/create-article.service';
import {createArticleActions} from './create-article.actions';

export const createArticleEffect = createEffect(
    (
        actions$ = inject(Actions),
        createArticleService = inject(CreateArticleService)
    ) => {
        return actions$.pipe(
            ofType(createArticleActions.createArticle),
            switchMap(({request}) => {
                return createArticleService.createArticle(request).pipe(
                    map(({article}) =>
                        createArticleActions.createArticleSuccess({article})
                    ),
                    catchError((errors: HttpErrorResponse) =>
                        of(
                            createArticleActions.createArticleFailure({
                                errors: errors.error.errors,
                            })
                        )
                    )
                );
            })
        );
    },
    {
        functional: true,
    }
);

export const redirectAfterArticleWasCreated = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
        return actions$.pipe(
            ofType(createArticleActions.createArticleSuccess),
            tap(({article}) => {
                router.navigate(['/article', article.slug]);
            })
        );
    },
    {
        functional: true,
        dispatch: false,
    }
);
