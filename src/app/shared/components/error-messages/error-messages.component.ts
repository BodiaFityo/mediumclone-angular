import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-error-messages',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './error-messages.component.html',
    styleUrls: ['./error-messages.component.scss'],
})
export class ErrorMessagesComponent {
    @Input() errors = '';
}
