import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment.development';
import {UserProfileRequest} from '../models/user-profile-request.model';
import {UserProfileResponse} from '../models/user-profile-response.model';

@Injectable()
export class UserProfileService {
    constructor(private http: HttpClient) {}

    loadUserProfile(
        request: UserProfileRequest
    ): Observable<UserProfileResponse> {
        const url = environment.apiUrl + `/profiles/${request.username}`;
        return this.http.get<UserProfileResponse>(url);
    }
}
