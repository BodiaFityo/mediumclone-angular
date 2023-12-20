import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {ArticleResponse} from 'src/app/shared/models/article-response.model';
import {Articles} from 'src/app/shared/models/articles.model';
import {environment} from 'src/environments/environment.development';

@Injectable()
export class FavoriteService {
    constructor(private http: HttpClient) {}

    addToFavorite(slug: string): Observable<Articles> {
        const url = environment.apiUrl + `/articles/${slug}/favorite`;
        return this.http
            .post<ArticleResponse>(url, {})
            .pipe(map((res) => res.article));
    }
}
