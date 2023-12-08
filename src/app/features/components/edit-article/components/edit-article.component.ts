import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleFormComponent} from 'src/app/shared/components/article-form/components/article-form.component';
import {EditArticleFacade} from '../edit-article.facade';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, map} from 'rxjs';
import {LoaderComponent} from 'src/app/shared/components/loader/loader.component';
import {ArticleForm} from 'src/app/shared/components/article-form/models/article-form.model';
import {ArticleRequest} from 'src/app/shared/models/article-request.model';

@Component({
    selector: 'mc-edit-article',
    standalone: true,
    imports: [CommonModule, ArticleFormComponent, LoaderComponent],
    templateUrl: './edit-article.component.html',
    styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
    data$ = combineLatest([
        this.editArticleFacade.isLoading$,
        this.editArticleFacade.loadArticle$,
        this.editArticleFacade.backendError$,
        this.editArticleFacade.isSubmitting$,
    ]).pipe(
        map(([isLoading, loadArticle, backendError, isSubmitting]) => {
            return {
                isLoading,
                loadArticle,
                backendError: backendError ? [backendError] : null,
                isSubmitting,
            };
        })
    );
    slug = this.route.snapshot.paramMap.get('slug') ?? '';

    constructor(
        private editArticleFacade: EditArticleFacade,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.editArticleFacade.loadArticle(this.slug);
    }

    onEditArticleSubmit(articleForm: ArticleForm): void {
        const request: ArticleRequest = {
            article: articleForm,
        };
        this.editArticleFacade.editArticle(this.slug, request);
    }
}
