import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'mc-pagination',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
    @Input() url = '';
    @Input() limit = 20;
    @Input() total = 0;
    @Input() currentPage = 1;

    pageCount = 0;
    pages: number[] = [];

    ngOnInit(): void {
        this.pageCount = Math.ceil(this.total / this.limit);
        this.pages = this.pageCount > 0 ? this.range(1, this.pageCount) : [];
    }

    private range(start: number, end: number): number[] {
        return [...Array(end - start).keys()].map((el) => el + start);
    }
}
