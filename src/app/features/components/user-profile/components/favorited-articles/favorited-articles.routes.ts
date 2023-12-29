import {Route} from '@angular/router';
import {FavoritedArticlesComponent} from './components/favorited-articles.component';

export const favoritedArticle: Route[] = [
    {
        path: '',
        component: FavoritedArticlesComponent,
    },
];
