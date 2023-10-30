import {Route} from '@angular/router';
import {GlobalFeedComponent} from './components/global-feed/global-feed.component';

export const globalFeed: Route[] = [
    {
        path: '',
        component: GlobalFeedComponent,
    },
];
