import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {provideState, provideStore} from '@ngrx/store';
import {AppComponent} from './app/app.component';
import {appRoutes} from './app/app.routes';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {isDevMode} from '@angular/core';
import {authFeatureKey, authReducer} from './app/core/auth/store/auth.reducer';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideEffects} from '@ngrx/effects';
import * as authEffects from './app/core/auth/store/auth.effects';
import {provideRouterStore, routerReducer} from '@ngrx/router-store';
import {authInterceptor} from './app/shared/services/auth-interceptor';
import * as getFeedEffect from './app/shared/components/feed/store/feed.effects';
import * as getPopularTagsEffect from './app/shared/components/popular-tags/store/popular-tags.effects';
import {
    feedFeatureKey,
    feedReducer,
} from './app/shared/components/feed/store/feed.reducer';
import {
    popularTagsFeatureKey,
    popularTagsReducer,
} from './app/shared/components/popular-tags/store/popular-tags.reducer';

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideRouter(appRoutes),
        provideRouterStore(),
        provideStore({
            router: routerReducer,
        }),
        provideEffects(authEffects),
        provideEffects(getFeedEffect),
        provideEffects(getPopularTagsEffect),
        provideStoreDevtools({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(), // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
            connectOutsideZone: true, // If set to true, the connection is established outside the Angular zone for better performance
        }),
        provideState(authFeatureKey, authReducer),
        provideState(feedFeatureKey, feedReducer),
        provideState(popularTagsFeatureKey, popularTagsReducer),
    ],
});
