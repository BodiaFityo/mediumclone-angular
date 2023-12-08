import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from 'src/app/shared/components/banner/banner.component';
import {PopularTagsComponent} from 'src/app/shared/components/popular-tags/popular-tags.component';
import {RouterOutlet} from '@angular/router';
import {AuthFacade} from '../auth/auth.facade';
import {combineLatest} from 'rxjs';

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
    });

    constructor(private authFacade: AuthFacade) {}

    ngOnInit(): void {
        this.authFacade.getCurrentUser();
    }
}
