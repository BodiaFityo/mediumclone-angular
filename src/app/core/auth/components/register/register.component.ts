import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthFacade} from '../../auth.facade';
import {RegisterUserRequest} from '../../models/register-request.model';
import {RouterLink} from '@angular/router';
import {combineLatest, map, Observable} from 'rxjs';
import {ErrorMessagesComponent} from 'src/app/shared/components/error-messages/error-messages.component';

@Component({
    selector: 'mc-register',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterLink,
        ErrorMessagesComponent,
    ],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    form = this.fb.nonNullable.group({
        username: ['', Validators.required],
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
        const user: RegisterUserRequest = {
            user: this.form.getRawValue(),
        };

        this.authFacade.registerUser(user);
    }
}
