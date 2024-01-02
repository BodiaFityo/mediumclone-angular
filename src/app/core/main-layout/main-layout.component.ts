import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from 'src/app/shared/components/banner/banner.component';
import {PopularTagsComponent} from 'src/app/shared/components/popular-tags/popular-tags.component';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {AuthFacade} from '../auth/auth.facade';
import {combineLatest, filter, map, tap} from 'rxjs';

@Component({
    selector: 'mc-main-layout',
    standalone: true,
    imports: [
        CommonModule,
        BannerComponent,
        PopularTagsComponent,
        RouterOutlet,
    ],
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
    data$ = combineLatest({
        currentUser: this.authFacade.currentUser$,
        isLoading: this.authFacade.isLoading$,
        showBanner: this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map((event) => {
                if (event instanceof NavigationEnd) {
                    return event.url === '/' || event.url === '/feed';
                }
                return false;
            })
        ),
    });

    constructor(
        private authFacade: AuthFacade,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.authFacade.getCurrentUser();
    }
}
