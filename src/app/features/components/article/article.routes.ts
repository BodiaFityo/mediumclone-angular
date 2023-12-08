import {Route} from '@angular/router';
import {provideEffects} from '@ngrx/effects';
import {provideState} from '@ngrx/store';
import {ArticleComponent} from './components/article.component';
import {articleFeatureKey, articleReducer} from './store/article.reducer';
import * as getArticleEffect from 'src/app/features/components/article/store/article.effects';

export const article: Route[] = [
    {
        path: '',
        component: ArticleComponent,
        providers: [
            provideState(articleFeatureKey, articleReducer),
            provideEffects(getArticleEffect),
        ],
    },
];
