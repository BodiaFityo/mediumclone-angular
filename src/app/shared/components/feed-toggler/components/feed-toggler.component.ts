import {Component, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {AuthFacade} from 'src/app/core/auth/auth.facade';
import {ToggleOptions, ToggleType} from '../feed-toggler.models';

@Component({
    selector: 'mc-feed-toggler',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './feed-toggler.component.html',
    styleUrls: ['./feed-toggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit {
    @Input() tagName?: string;
    @Input() toggleType: ToggleType = ToggleType.GLOBALFEED;
    @Input() username?: string;

    toggleOptions: ToggleOptions = {
        firstLink: {
            text: 'Your Feed',
            link: '/feed',
        },
        secondLink: {
            text: 'Global Feed',
            link: '/',
        },
    };

    currentUser$ = inject(AuthFacade).currentUser$;

    ngOnInit(): void {
        if (this.toggleType === ToggleType.PROFILE) {
            this.setToogleOptions();
        }
    }

    private setToogleOptions(): void {
        this.toggleOptions = {
            firstLink: {
                text: 'My Articles',
                link: `/profiles/${this.username}/my-articles`,
            },
            secondLink: {
                text: 'Favorited Articles',
                link: `/profiles/${this.username}/favorited`,
            },
        };
    }
}
