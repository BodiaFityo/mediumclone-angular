import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    ActivatedRoute,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
} from '@angular/router';
import {UserProfileFacade} from '../user-profile.facade';
import {UserProfileRequest} from '../models/user-profile-request.model';
import {combineLatest} from 'rxjs';
import {LoaderComponent} from 'src/app/shared/components/loader/loader.component';
import {FeedTogglerComponent} from 'src/app/shared/components/feed-toggler/components/feed-toggler.component';
import {ToggleType} from 'src/app/shared/components/feed-toggler/feed-toggler.models';

@Component({
    selector: 'mc-user-profile',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        LoaderComponent,
        FeedTogglerComponent,
    ],
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
    data$ = combineLatest({
        userProfile: this.userProfileFacade.getUserProfile$,
        isLoading: this.userProfileFacade.isLoading$,
        error: this.userProfileFacade.error$,
    });

    toggleType = ToggleType.PROFILE;
    username = this.route.snapshot.paramMap.get('username') || '';

    constructor(
        private userProfileFacade: UserProfileFacade,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const reques: UserProfileRequest = {
            username: this.username,
        };
        this.userProfileFacade.loadUserProfile(reques);
    }
}
