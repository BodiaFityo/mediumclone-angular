import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {TokenService} from './token.service';

export const authInterceptor: HttpInterceptorFn = (req, nex) => {
    const token = inject(TokenService).get();
    req = req.clone({
        setHeaders: {
            Authorization: token ? `Token ${token}` : '',
        },
    });
    return nex(req);
};
