import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {AuthFacade} from 'src/app/core/auth/auth.facade';
import {combineLatest} from 'rxjs';

@Component({
    selector: 'mc-nav-bar',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
    data$ = combineLatest({
        currentUser: this.authFacade.currentUser$,
    });
    constructor(private authFacade: AuthFacade) {}
}
