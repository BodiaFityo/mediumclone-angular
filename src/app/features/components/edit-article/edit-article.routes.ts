import {Route} from '@angular/router';
import {provideEffects} from '@ngrx/effects';
import {provideState} from '@ngrx/store';
import {EditArticleComponent} from './components/edit-article.component';
import {EditArticleFacade} from './edit-article.facade';
import {EditArticleService} from './services/edit-article.service';
import {
    editArticleFeatureKey,
    editArticleReducer,
} from './store/edit-article.reducer';
import * as getEditARticleEffects from 'src/app/features/components/edit-article/store/edit-article.effects';

export const editArticle: Route[] = [
    {
        path: '',
        component: EditArticleComponent,
        providers: [
            EditArticleFacade,
            EditArticleService,
            provideState(editArticleFeatureKey, editArticleReducer),
            provideEffects(getEditARticleEffects),
        ],
    },
];
