import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavoriteFacade} from '../favorite.facade';

@Component({
    selector: 'mc-favorite',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
    @Input() favorited = false;
    @Input() favoritesCount = 0;
    @Input() slug = '';

    constructor(private favoriteFacade: FavoriteFacade) {}

    favoriteUnfavoriteToggle(): void {
        this.favorited = !this.favorited;

        if (this.favorited) {
            this.favoritesCount = this.favoritesCount + 1;
            this.favoriteFacade.addToFavorite(this.slug);
        } else {
            this.favoritesCount = this.favoritesCount - 1;
            this.favoriteFacade.unfavorite(this.slug);
        }
    }
}
