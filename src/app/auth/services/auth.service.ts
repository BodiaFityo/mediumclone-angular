import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {User} from 'src/app/shared/models/user.model';
import {environment} from 'src/environments/environment';
import {AuthUserResponse} from '../models/auth-response.model';

import {LoginUserReques} from '../models/login-request.model';
import {RegisterUserRequest} from '../models/register-request.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: RegisterUserRequest): Observable<User> {
        const url = 'https://api.realworld.io/api' + '/users';
        return this.http
            .post<AuthUserResponse>(url, data)
            .pipe(map((res) => res.user));
    }

    login(data: LoginUserReques): Observable<User> {
        const url = 'https://api.realworld.io/api' + '/users/login';
        return this.http
            .post<AuthUserResponse>(url, data)
            .pipe(map((res) => res.user));
    }

    getCurrentUser(): Observable<User> {
        const url = 'https://api.realworld.io/api' + '/user';
        return this.http
            .get<AuthUserResponse>(url)
            .pipe(map((res) => res.user));
    }
}
