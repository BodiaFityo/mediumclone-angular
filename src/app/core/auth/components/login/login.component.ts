import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {ErrorMessagesComponent} from 'src/app/shared/components/error-messages/error-messages.component';
import {AuthFacade} from '../../auth.facade';
import {LoginUserReques} from '../../models/login-request.model';
import {combineLatest, map} from 'rxjs';

@Component({
    selector: 'mc-login',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterLink,
        ErrorMessagesComponent,
    ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    form = this.fb.nonNullable.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
    });

    data$ = combineLatest(
        this.authFacade.isSubmitting$,
        this.authFacade.isBackendErrors$
    ).pipe(
        map(([isSubmitting, errors]) => {
            const backendErrors: string[] = Object.keys(errors ?? []).map(
                (item, index) => {
                    if (errors) {
                        return (
                            Object.keys(errors ?? [])[index] +
                            ' ' +
                            errors[Object.keys(errors ?? [])[0]]
                        );
                    }
                    return '';
                }
            );
            return {
                isSubmitting: isSubmitting,
                backendErrors,
            };
        })
    );

    constructor(
        private fb: FormBuilder,
        private authFacade: AuthFacade
    ) {}

    onSubmit() {
        const user: LoginUserReques = {
            user: this.form.getRawValue(),
        };

        this.authFacade.loginUser(user);
    }
}
