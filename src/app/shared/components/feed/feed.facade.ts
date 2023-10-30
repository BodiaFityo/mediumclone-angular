import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {feedActions} from './store/feed.actions';
import {selectError, selectFeed, selectIsLoading} from './store/feed.reducer';

@Injectable()
export class FeedFacade {
    readonly isLoading$ = this.store.select(selectIsLoading);
    readonly loadFeed$ = this.store.select(selectFeed);
    readonly isError$ = this.store.select(selectError);

    constructor(private store: Store) {}

    getFeed(url: string) {
        this.store.dispatch(feedActions.getFeed({url}));
    }
}
