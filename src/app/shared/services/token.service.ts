import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    private key = 'accessToken';
    constructor() {}

    set(token: unknown) {
        try {
            localStorage.setItem(this.key, JSON.stringify(token));
        } catch (error) {
            console.error('Error saving to local storage', error);
        }
    }

    get(): unknown {
        try {
            const token = localStorage.getItem(this.key);
            return token ? JSON.parse(token) : null;
        } catch (error) {
            console.error('Erro getting item from local storage', error);
            return null;
        }
    }
}
