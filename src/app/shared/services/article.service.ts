import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment.development';
import {ArticleResponse} from '../models/article-response.model';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    constructor(private http: HttpClient) {}

    getArticle(slug: string): Observable<ArticleResponse> {
        const url = environment.apiUrl + `/articles/${slug}`;
        return this.http.get<ArticleResponse>(url);
    }

    deleteArticle(slug: string): Observable<{}> {
        const url = environment.apiUrl + `/articles/${slug}`;
        return this.http.delete(url);
    }
}
