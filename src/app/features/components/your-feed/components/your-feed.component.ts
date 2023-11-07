import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from 'src/app/shared/components/feed/feed.component';
import {FeedTogglerComponent} from 'src/app/shared/components/feed-toggler/feed-toggler.component';

@Component({
    selector: 'mc-your-feed',
    standalone: true,
    imports: [CommonModule, FeedComponent, FeedTogglerComponent],
    templateUrl: './your-feed.component.html',
    styleUrls: ['./your-feed.component.scss'],
})
export class YourFeedComponent {
    apiUrl = '/articles/feed';
}
