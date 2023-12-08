import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ArticleRequest} from 'src/app/shared/models/article-request.model';
import {ArticleResponse} from 'src/app/shared/models/article-response.model';
import {environment} from 'src/environments/environment.development';

@Injectable()
export class CreateArticleService {
    constructor(private http: HttpClient) {}

    createArticle(request: ArticleRequest): Observable<ArticleResponse> {
        const url = environment.apiUrl + '/articles';
        return this.http.post<ArticleResponse>(url, request);
    }
}
