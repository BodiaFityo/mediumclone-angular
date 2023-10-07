import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthFacade} from './auth/auth.facade';
import {NavBarComponent} from './shared/components/nav-bar/nav-bar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, NavBarComponent],
})
export class AppComponent implements OnInit {
    constructor(private authFacade: AuthFacade) {}

    ngOnInit(): void {
        this.authFacade.getCurrentUser();
    }
}
