import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {ArticleResponse} from 'src/app/shared/models/article-response.model';

export const articleActions = createActionGroup({
    source: 'Article',
    events: {
        'Load Article': props<{slug: string}>(),
        'Load Article Success': props<ArticleResponse>(),
        'Load Article Failure': emptyProps(),

        'Delete Article': props<{slug: string}>(),
        'Delete Article Succsess': emptyProps(),
        'Delete Article Faulure': emptyProps(),
    },
});
