import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from 'src/app/shared/components/feed/feed.component';
import {ActivatedRoute, Params} from '@angular/router';
import {FeedTogglerComponent} from 'src/app/shared/components/feed-toggler/components/feed-toggler.component';

@Component({
    selector: 'mc-tag-feed',
    standalone: true,
    imports: [CommonModule, FeedComponent, FeedTogglerComponent],
    templateUrl: './tag-feed.component.html',
    styleUrls: ['./tag-feed.component.scss'],
})
export class TagFeedComponent implements OnInit {
    apiUrl = '';
    tagName = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.tagName = params['slug'];
            this.apiUrl = `/articles?tag=${this.tagName}`;
        });
    }
}
