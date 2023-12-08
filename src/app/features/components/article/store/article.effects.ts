import {inject} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {ArticleService} from 'src/app/shared/services/article.service';
import {articleActions} from 'src/app/features/components/article/store/article.actions';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

export const articleEffect = createEffect(
    (actions$ = inject(Actions), articleService = inject(ArticleService)) => {
        return actions$.pipe(
            ofType(articleActions.loadArticle),
            switchMap(({slug}) => {
                return articleService.getArticle(slug).pipe(
                    map((article) =>
                        articleActions.loadArticleSuccess(article)
                    ),
                    catchError((errors: HttpErrorResponse) => {
                        return of(articleActions.loadArticleFailure());
                    })
                );
            })
        );
    },
    {
        functional: true,
    }
);

export const deleteArticleEffect = createEffect(
    (actions$ = inject(Actions), articleService = inject(ArticleService)) => {
        return actions$.pipe(
            ofType(articleActions.deleteArticle),
            switchMap(({slug}) => {
                return articleService.deleteArticle(slug).pipe(
                    map(() => articleActions.deleteArticleSuccsess()),
                    catchError((errors: HttpErrorResponse) => {
                        return of(articleActions.deleteArticleFaulure());
                    })
                );
            })
        );
    },
    {functional: true}
);

export const redirectAfterDeleteArticle = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
        return actions$.pipe(
            ofType(articleActions.deleteArticleSuccsess),
            tap(() => router.navigateByUrl('/'))
        );
    },
    {functional: true, dispatch: false}
);
