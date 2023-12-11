import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MainLayoutComponent} from './core/main-layout/main-layout.component';
import {NavBarComponent} from './core/nav-bar/nav-bar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, NavBarComponent, MainLayoutComponent],
})
export class AppComponent {
    constructor() {}
}
