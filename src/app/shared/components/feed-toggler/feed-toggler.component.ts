import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {AuthFacade} from 'src/app/core/auth/auth.facade';

@Component({
    selector: 'mc-feed-toggler',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './feed-toggler.component.html',
    styleUrls: ['./feed-toggler.component.scss'],
})
export class FeedTogglerComponent {
    @Input() tagName?: string;

    currentUser$ = inject(AuthFacade).currentUser$;
}
