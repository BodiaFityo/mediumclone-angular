import {Route} from '@angular/router';

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
                (m) => m.tagFeedRoute
            ),
    },
];
