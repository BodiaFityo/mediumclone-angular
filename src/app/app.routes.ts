import {Route} from '@angular/router';
import {authenticationGuard} from './shared/services/auth.guard';

export const appRoutes: Route[] = [
    {
        path: 'register',
        loadChildren: () =>
            import('src/app/core/auth/auth.routes').then(
                (m) => m.registerRoutes
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('src/app/core/auth/auth.routes').then((m) => m.loginRoutes),
    },
    {
        path: '',
        loadChildren: () =>
            import(
                'src/app/features/components/global-feed/global-feed.routes'
            ).then((m) => m.globalFeed),
    },
    {
        path: 'feed',
        loadChildren: () =>
            import(
                'src/app/features/components/your-feed/your-feed.routes'
            ).then((m) => m.yourFeed),
    },

    {
        path: 'tags/:slug',
        loadChildren: () =>
            import('src/app/features/components/tag-feed/tag-feed.routes').then(
                (m) => m.tagFeed
            ),
    },

    {
        path: 'article/new',
        loadChildren: () =>
            import(
                'src/app/features/components/create-article/create-article.routes'
            ).then((m) => m.createArticle),
        canActivate: [authenticationGuard()],
    },

    {
        path: 'article/:slug',
        loadChildren: () =>
            import('src/app/features/components/article/article.routes').then(
                (m) => m.article
            ),
    },
    {
        path: 'article/:slug/edit',
        loadChildren: () =>
            import(
                'src/app/features/components/edit-article/edit-article.routes'
            ).then((m) => m.editArticle),
        canActivate: [authenticationGuard()],
    },
    {
        path: 'settings',
        loadChildren: () =>
            import('src/app/features/components/settings/settings.routes').then(
                (m) => m.settings
            ),
        canActivate: [authenticationGuard()],
    },
    {
        path: 'profiles/:username',
        loadChildren: () =>
            import(
                'src/app/features/components/user-profile/user-profile.roures'
            ).then((m) => m.userProfileRoutes),
        canActivate: [authenticationGuard()],
    },
    {
        path: 'profiles/:username',
        loadChildren: () =>
            import(
                'src/app/features/components/user-profile/user-profile.roures'
            ).then((m) => m.userProfileRoutes),
    },
];
