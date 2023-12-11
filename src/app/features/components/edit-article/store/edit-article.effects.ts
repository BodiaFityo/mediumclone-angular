import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {editArticleActions} from './edit-article.actions';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {EditArticleService} from '../services/edit-article.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

export const getEditArticleEffect = createEffect(
    (
        actions$ = inject(Actions),
        editArticleService = inject(EditArticleService)
    ) => {
        return actions$.pipe(
            ofType(editArticleActions.getArticle),
            switchMap(({slug}) => {
                return editArticleService.getArticle(slug).pipe(
                    map(({article}) =>
                        editArticleActions.getArticleSuccess({article})
                    ),
                    catchError((error: HttpErrorResponse) =>
                        of(
                            editArticleActions.getArticleFailure({
                                errors: error.error,
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

export const editArticleEffect = createEffect(
    (
        actions$ = inject(Actions),
        editArticleService = inject(EditArticleService)
    ) => {
        return actions$.pipe(
            ofType(editArticleActions.editArticle),
            switchMap(({slug, request}) => {
                return editArticleService
                    .editArticle(slug, request)
                    .pipe(
                        map(({article}) =>
                            editArticleActions.editArticleSuccess({article})
                        )
                    );
            })
        );
    },
    {
        functional: true,
    }
);

export const redirectAfterEditArticle = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
        return actions$.pipe(
            ofType(editArticleActions.editArticleSuccess),
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
