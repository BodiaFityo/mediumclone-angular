import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ArticleRequest} from 'src/app/shared/models/article-request.model';
import {editArticleState} from './models/edit-article-state.model';
import {editArticleActions} from './store/edit-article.actions';
import {
    selectArticle,
    selectErrors,
    selectIsLoading,
    selectIsSubmitting,
} from './store/edit-article.reducer';

@Injectable()
export class EditArticleFacade {
    readonly isLoading$ = this.store.select(selectIsLoading);
    readonly loadArticle$ = this.store.select(selectArticle);
    readonly backendError$ = this.store.select(selectErrors);
    readonly isSubmitting$ = this.store.select(selectIsSubmitting);

    constructor(private store: Store<editArticleState>) {}

    loadArticle(slug: string): void {
        this.store.dispatch(editArticleActions.getArticle({slug}));
    }

    editArticle(slug: string, request: ArticleRequest): void {
        this.store.dispatch(editArticleActions.editArticle({slug, request}));
    }
}
