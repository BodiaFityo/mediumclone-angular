import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Articles} from 'src/app/shared/models/articles.model';

export const favoriteActions = createActionGroup({
    source: 'Favorite',
    events: {
        'Add To Favorite': props<{slug: string}>(),
        'Add To Favorite Success': props<{article: Articles}>(),
        'Add To Favorite Failure': emptyProps(),

        Unfavorite: props<{slug: string}>(),
        'Unfavorite Success': props<{article: Articles}>(),
        'Unfavorite Failure': emptyProps(),
    },
});
