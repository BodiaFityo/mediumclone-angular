import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {GetFeedResponse} from '../models/get-feed-respons.model';
import {FeedService} from '../services/feed-service.service';
import {feedActions} from './feed.actions';

export const getFeedEffect = createEffect(
    (actions$ = inject(Actions), feedService = inject(FeedService)) => {
        return actions$.pipe(
            ofType(feedActions.getFeed),
            switchMap(({url}) => {
                return feedService.getFeed(url).pipe(
                    map((feed: GetFeedResponse) => {
                        return feedActions.getFeedSuccess({feed});
                    }),
                    catchError(() => of(feedActions.getFeedFailure()))
                );
            })
        );
    },
    {functional: true}
);
