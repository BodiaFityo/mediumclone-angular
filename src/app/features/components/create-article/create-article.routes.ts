import {Route} from '@angular/router';
import {provideEffects} from '@ngrx/effects';
import {provideState} from '@ngrx/store';
import {CreateArticleComponent} from './components/create-article.component';
import {
    createArticleFeatureKey,
    createArticleReducer,
} from './store/create-article.reducer';
import * as getCreateArticleEffects from './store/create-article.effects';
import {CreateArticleService} from './services/create-article.service';

export const createArticle: Route[] = [
    {
        path: '',
        component: CreateArticleComponent,
        providers: [
            provideState(createArticleFeatureKey, createArticleReducer),
            provideEffects(getCreateArticleEffects),
            CreateArticleService,
        ],
    },
];
