import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {TokenService} from './token.service';

export const authenticationGuard = (): CanActivateFn => {
    return () => {
        const tokenService: TokenService = inject(TokenService);
        const router: Router = inject(Router);

        if (tokenService.get()) {
            return true;
        }
        router.navigateByUrl('/login');
        return false;
    };
};
