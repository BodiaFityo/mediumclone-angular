import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {articleActions} from './store/article.actions';
import {selectArticle, selectIsLoading} from './store/article.reducer';

@Injectable()
export class ArticleFacade {
    readonly getArticle$ = this.store.select(selectArticle);
    readonly isLoading$ = this.store.select(selectIsLoading);

    constructor(private store: Store) {}

    loadArticle(slug: string): void {
        this.store.dispatch(articleActions.loadArticle({slug}));
    }

    deleteArticle(slug: string) {
        this.store.dispatch(articleActions.deleteArticle({slug}));
    }
}
