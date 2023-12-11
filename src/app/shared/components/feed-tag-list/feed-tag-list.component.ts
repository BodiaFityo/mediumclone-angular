import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'mc-feed-tag-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feed-tag-list.component.html',
    styleUrls: ['./feed-tag-list.component.scss'],
})
export class FeedTagListComponent {
    @Input() tagList: string[] = [];
}
