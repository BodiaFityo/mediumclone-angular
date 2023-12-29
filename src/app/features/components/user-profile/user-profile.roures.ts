import {Route} from '@angular/router';
import {provideEffects} from '@ngrx/effects';
import {provideState} from '@ngrx/store';

import {UserProfileComponent} from './components/user-profile.component';
import {
    userProfileFatureKey,
    userProfileReducer,
} from './store/user-profile.reducer';
import * as userProfileEffect from './store/user-profile.effects';
import {UserProfileFacade} from './user-profile.facade';
import {UserProfileService} from './services/user-profile.service';

export const userProfileRoutes: Route[] = [
    {
        path: '',
        component: UserProfileComponent,
        providers: [
            provideState(userProfileFatureKey, userProfileReducer),
            provideEffects(userProfileEffect),
            UserProfileFacade,
            UserProfileService,
        ],
        children: [
            {
                path: 'my-articles',
                loadChildren: () =>
                    import('./components/my-articles/my-article.routes').then(
                        (m) => m.myArticle
                    ),
            },
            {
                path: 'favorited',
                loadChildren: () =>
                    import(
                        './components/favorited-articles/favorited-articles.routes'
                    ).then((m) => m.favoritedArticle),
            },
        ],
    },
];
