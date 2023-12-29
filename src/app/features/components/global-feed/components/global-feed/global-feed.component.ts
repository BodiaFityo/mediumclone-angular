import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from 'src/app/shared/components/feed/feed.component';
import {FeedTogglerComponent} from 'src/app/shared/components/feed-toggler/components/feed-toggler.component';

@Component({
    selector: 'mc-global-feed',
    standalone: true,
    imports: [CommonModule, FeedComponent, FeedTogglerComponent],
    templateUrl: './global-feed.component.html',
    styleUrls: ['./global-feed.component.scss'],
})
export class GlobalFeedComponent {
    apiUrl = '/articles';
}
