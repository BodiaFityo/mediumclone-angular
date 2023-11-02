import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {environment} from 'src/environments/environment.development';
import {GetPopularTagsResponse} from '../models/get-popular-tags-response.model';

@Injectable({
    providedIn: 'root',
})
export class PopularTagsService {
    constructor(private http: HttpClient) {}

    getPopularTags(): Observable<string[]> {
        const fullUrl = environment.apiUrl + '/tags';
        return this.http
            .get<GetPopularTagsResponse>(fullUrl)
            .pipe(map(({tags}) => tags));
    }
}
