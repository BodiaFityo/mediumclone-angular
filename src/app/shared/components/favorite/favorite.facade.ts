import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {favoriteActions} from './store/favorite.actions';

@Injectable({
    providedIn: 'root',
})
export class FavoriteFacade {
    constructor(private store: Store) {}

    addToFavorite(slug: string): void {
        this.store.dispatch(favoriteActions.addToFavorite({slug}));
    }

    unfavorite(slug: string): void {
        this.store.dispatch(favoriteActions.unfavorite({slug}));
    }
}
