import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from 'src/app/shared/components/feed/feed.component';
import {UserProfileFacade} from '../../../user-profile.facade';

@Component({
    selector: 'mc-favorited-articles',
    standalone: true,
    imports: [CommonModule, FeedComponent],
    templateUrl: './favorited-articles.component.html',
    styleUrls: ['./favorited-articles.component.scss'],
})
export class FavoritedArticlesComponent {
    apiUrl = '/articles?favorited=';
    userProfile$ = this.userProfileFacade.getUserProfile$;

    constructor(private userProfileFacade: UserProfileFacade) {}
}
