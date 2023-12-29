import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from 'src/app/shared/components/feed/feed.component';
import {UserProfileFacade} from '../../../user-profile.facade';

@Component({
    selector: 'mc-my-articles',
    standalone: true,
    imports: [CommonModule, FeedComponent],
    templateUrl: './my-articles.component.html',
    styleUrls: ['./my-articles.component.scss'],
})
export class MyArticlesComponent {
    apiUrl = '/articles?author=';
    userProfile$ = this.userProfileFacade.getUserProfile$;

    constructor(private userProfileFacade: UserProfileFacade) {}
}
