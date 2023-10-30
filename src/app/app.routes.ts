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
            import('src/app/features/global-feed/global-feed.routes').then(
                (m) => m.globalFeed
            ),
    },
];
