import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ArticleRequest} from 'src/app/shared/models/article-request.model';
import {createArticleActions} from 'src/app/features/components/create-article/store/create-article.actions';
import {selectErrors, selectIsSubmitting} from './store/create-article.reducer';

@Injectable()
export class CreateArticleFacade {
    readonly isSubmitting$ = this.store.select(selectIsSubmitting);
    readonly isError$ = this.store.select(selectErrors);

    constructor(private store: Store) {}

    createArticle(request: ArticleRequest): void {
        this.store.dispatch(createArticleActions.createArticle({request}));
    }
}
