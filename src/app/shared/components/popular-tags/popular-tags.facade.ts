import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {popularTagsActions} from './store/popular-tags.actions';
import {selectTags, selectIsLoading} from './store/popular-tags.reducer';

@Injectable()
export class PopularTagsFacade {
    readonly getTags$ = this.store.select(selectTags);
    readonly isLoading$ = this.store.select(selectIsLoading);

    constructor(private store: Store) {}

    loadPopularTags() {
        this.store.dispatch(popularTagsActions.getPopularTags());
    }
}
