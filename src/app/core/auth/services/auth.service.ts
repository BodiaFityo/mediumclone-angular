import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {UpdateUserRequest} from 'src/app/shared/models/update-user-request.model';
import {User} from 'src/app/shared/models/user.model';
import {environment} from 'src/environments/environment.development';
import {AuthUserResponse} from '../models/auth-response.model';

import {LoginUserReques} from '../models/login-request.model';
import {RegisterUserRequest} from '../models/register-request.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: RegisterUserRequest): Observable<User> {
        const url = environment.apiUrl + '/users';
        return this.http
            .post<AuthUserResponse>(url, data)
            .pipe(map((res) => res.user));
    }

    login(data: LoginUserReques): Observable<User> {
        const url = environment.apiUrl + '/users/login';
        return this.http
            .post<AuthUserResponse>(url, data)
            .pipe(map((res) => res.user));
    }

    getCurrentUser(): Observable<User> {
        const url = environment.apiUrl + '/user';
        return this.http
            .get<AuthUserResponse>(url)
            .pipe(map((res) => res.user));
    }

    updateUser(user: UpdateUserRequest): Observable<User> {
        const url = environment.apiUrl + '/user';
        return this.http
            .put<AuthUserResponse>(url, user)
            .pipe(map((res) => res.user));
    }
}
