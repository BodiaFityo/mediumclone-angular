import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedFacade} from './feed.facade';
import {combineLatest} from 'rxjs';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ErrorMessagesComponent} from '../error-messages/error-messages.component';
import {LoaderComponent} from '../loader/loader.component';
import {PaginationComponent} from '../pagination/pagination.component';
import queryString from 'query-string';
import {FeedTagListComponent} from './feed-tag-list/feed-tag-list.component';

@Component({
    selector: 'mc-feed',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        ErrorMessagesComponent,
        LoaderComponent,
        PaginationComponent,
        FeedTagListComponent,
    ],
    providers: [FeedFacade],
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
    @Input() apiUrl = '';

    baseUrl = this.router.url.split('?')[0];
    limit = 20;
    currentPage = 0;

    data$ = combineLatest({
        isLoading: this.feedFacade.isLoading$,
        feed: this.feedFacade.loadFeed$,
        error: this.feedFacade.isError$,
    });

    constructor(
        private feedFacade: FeedFacade,
        private router: Router,
        private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.currentPage = Number(params['page'] || '1');
            this.fetchFeed();
        });
    }

    private fetchFeed() {
        const offset = this.currentPage * this.limit - this.limit;
        const parsedUrl = queryString.parseUrl(this.apiUrl);
        const stringifiedParams = queryString.stringify({
            limit: this.limit,
            offset,
            ...parsedUrl.query,
        });
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

        this.feedFacade.getFeed(apiUrlWithParams);
    }
}
