import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleFormComponent} from 'src/app/shared/components/article-form/components/article-form.component';
import {ArticleForm} from 'src/app/shared/components/article-form/models/article-form.model';
import {ArticleRequest} from 'src/app/shared/models/article-request.model';
import {CreateArticleFacade} from '../create-article.facade';
import {combineLatest, map} from 'rxjs';
import {BackEndErrors} from 'src/app/shared/models/back-end-errors.model';

@Component({
    selector: 'mc-create-article',
    standalone: true,
    imports: [CommonModule, ArticleFormComponent],
    providers: [CreateArticleFacade],
    templateUrl: './create-article.component.html',
    styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent {
    initFormValues: ArticleForm = {
        body: '',
        description: '',
        tagList: [],
        title: '',
    };

    data$ = combineLatest(
        this.createArticleFacade.isSubmitting$,
        this.createArticleFacade.isError$
    ).pipe(
        map(([isSubmitting, isError]) => {
            const backendErrors = Object.keys(isError ?? []).map(
                (item, index) => {
                    if (isError) {
                        return (
                            Object.keys(isError ?? [])[index] +
                            ' ' +
                            isError[Object.keys(isError ?? [])[0]]
                        );
                    }
                    return '';
                }
            );

            return {
                isSubmitting: isSubmitting,
                backendErrors: backendErrors,
            };
        })
    );

    constructor(private createArticleFacade: CreateArticleFacade) {}

    onCreateArticleSubmit(articleForm: ArticleForm): void {
        const articlerequest: ArticleRequest = {
            article: articleForm,
        };
        this.createArticleFacade.createArticle(articlerequest);
    }
}
