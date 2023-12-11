import {createActionGroup, props} from '@ngrx/store';
import {ArticleRequest} from 'src/app/shared/models/article-request.model';
import {Articles} from 'src/app/shared/models/articles.model';

export const editArticleActions = createActionGroup({
    source: 'Edit Article',
    events: {
        'Get Article': props<{slug: string}>(),
        'Get Article Success': props<{article: Articles}>(),
        'Get Article Failure': props<{errors: string}>(),

        'Edit Article': props<{slug: string; request: ArticleRequest}>(),
        'Edit Article Success': props<{article: Articles}>(),
        'Edit Article Failure': props<{errors: string}>(),
    },
});
