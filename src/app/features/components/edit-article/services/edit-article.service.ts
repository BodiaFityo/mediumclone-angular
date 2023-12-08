import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ArticleRequest} from 'src/app/shared/models/article-request.model';
import {ArticleResponse} from 'src/app/shared/models/article-response.model';
import {environment} from 'src/environments/environment.development';

@Injectable()
export class EditArticleService {
    constructor(private http: HttpClient) {}

    getArticle(slug: string): Observable<ArticleResponse> {
        const url = environment.apiUrl + `/articles/${slug}`;
        return this.http.get<ArticleResponse>(url);
    }

    editArticle(
        slug: string,
        request: ArticleRequest
    ): Observable<ArticleResponse> {
        const url = environment.apiUrl + `/articles/${slug}`;
        return this.http.put<ArticleResponse>(url, request);
    }
}
