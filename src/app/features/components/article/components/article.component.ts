import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleFacade} from '../article.facade';
import {ActivatedRoute, Params, RouterLink} from '@angular/router';
import {combineLatest, map} from 'rxjs';
import {LoaderComponent} from 'src/app/shared/components/loader/loader.component';
import {AuthFacade} from 'src/app/core/auth/auth.facade';
import {FeedTagListComponent} from 'src/app/shared/components/feed-tag-list/feed-tag-list.component';

@Component({
    selector: 'mc-article',
    standalone: true,
    imports: [CommonModule, LoaderComponent, RouterLink, FeedTagListComponent],
    providers: [ArticleFacade],
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
    slug = '';

    data$ = combineLatest({
        article: this.articleFacade.getArticle$,
        isLoading: this.articleFacade.isLoading$,
        currentUser: this.authFacade.currentUser$,
    }).pipe(
        map((data) => {
            return {
                ...data,
                isAuthor:
                    data.currentUser?.username ===
                    data.article?.author.username,
            };
        })
    );

    constructor(
        private articleFacade: ArticleFacade,
        private route: ActivatedRoute,
        private authFacade: AuthFacade
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.slug = params['slug'];
            this.articleFacade.loadArticle(this.slug);
        });
    }

    deleteArticle(): void {
        this.articleFacade.deleteArticle(this.slug);
    }
}
