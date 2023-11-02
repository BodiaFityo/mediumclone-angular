import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopularTagsFacade} from './popular-tags.facade';
import {combineLatest} from 'rxjs';
import {LoaderComponent} from '../loader/loader.component';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'mc-popular-tags',
    standalone: true,
    imports: [CommonModule, LoaderComponent, RouterLink],
    providers: [PopularTagsFacade],
    templateUrl: './popular-tags.component.html',
    styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
    popularTagsFacade: PopularTagsFacade = inject(PopularTagsFacade);

    data$ = combineLatest({
        tags: this.popularTagsFacade.getTags$,
        isLoading: this.popularTagsFacade.isLoading$,
    });

    ngOnInit(): void {
        this.popularTagsFacade.loadPopularTags();
    }
}
