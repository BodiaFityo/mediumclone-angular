import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {ArticleRequest} from 'src/app/shared/models/article-request.model';
import {Articles} from 'src/app/shared/models/articles.model';
import {BackEndErrors} from 'src/app/shared/models/back-end-errors.model';

export const createArticleActions = createActionGroup({
    source: 'Create Article',
    events: {
        'Create Article': props<{request: ArticleRequest}>(),
        'Create Article Success': props<{article: Articles}>(),
        'Create Article Failure': props<{errors: BackEndErrors}>(),
    },
});
