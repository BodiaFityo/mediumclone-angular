import {Route} from '@angular/router';
import {MyArticlesComponent} from './components/my-articles.component';

export const myArticle: Route[] = [
    {
        path: '',
        component: MyArticlesComponent,
    },
];
