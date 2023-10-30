import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {GetFeedResponse} from '../models/get-feed-respons.model';

export const feedActions = createActionGroup({
    source: 'Feed',
    events: {
        'Get Feed': props<{url: string}>(),
        'Get Feed Success': props<{feed: GetFeedResponse}>(),
        'Get Feed Failure': emptyProps(),
    },
});
