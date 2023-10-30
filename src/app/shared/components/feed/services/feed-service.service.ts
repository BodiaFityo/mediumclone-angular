import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment.development';
import {GetFeedResponse} from '../models/get-feed-respons.model';

@Injectable({
    providedIn: 'root',
})
export class FeedService {
    constructor(private http: HttpClient) {}

    getFeed(url: string): Observable<GetFeedResponse> {
        const fullUrl = environment.apiUrl + url;

        return this.http.get<GetFeedResponse>(fullUrl);
    }
}
