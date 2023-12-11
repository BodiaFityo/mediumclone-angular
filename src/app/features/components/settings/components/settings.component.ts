import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsFacade} from '../settings.facade';
import {ErrorMessagesComponent} from 'src/app/shared/components/error-messages/error-messages.component';
import {LoaderComponent} from 'src/app/shared/components/loader/loader.component';
import {AuthFacade} from 'src/app/core/auth/auth.facade';
import {combineLatest, filter, map} from 'rxjs';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from 'src/app/shared/models/user.model';
import {UpdateUserRequest} from 'src/app/shared/models/update-user-request.model';

@Component({
    selector: 'mc-settings',
    standalone: true,
    imports: [
        CommonModule,
        ErrorMessagesComponent,
        LoaderComponent,
        ReactiveFormsModule,
    ],
    providers: [SettingsFacade],
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
    data$ = combineLatest([
        this.settingsFacade.isSubmitting$,
        this.settingsFacade.errors$,
        this.authFacade.currentUser$,
    ]).pipe(
        filter(([isSubmitting, errors, currentUser]) => Boolean(currentUser)),
        map(([isSubmitting, errors, currentUser]) => {
            this.initForm(currentUser as User);
            this.currentUser = currentUser as User;
            return {
                isSubmitting,
                errors,
                currentUser,
            };
        })
    );

    form = this.fb.nonNullable.group({
        image: [''],
        username: [''],
        bio: [''],
        email: ['', Validators.email],
        password: [''],
    });

    private currentUser: User | undefined;

    constructor(
        private settingsFacade: SettingsFacade,
        private authFacade: AuthFacade,
        private fb: FormBuilder
    ) {}

    private initForm({image, username, bio, email}: User): void {
        this.form.patchValue({
            image: image || '',
            username,
            bio: bio || '',
            email,
        });
    }

    onSubmit(): void {
        if (this.currentUser) {
            const request: UpdateUserRequest = {
                user: {...this.currentUser, ...this.form.getRawValue()},
            };
            this.authFacade.updateUser(request);
        }
    }

    logOut(): void {
        this.authFacade.logOut();
    }
}
