import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {SettingsStateInterface} from './models/settings-state.model';
import {selectErrors, selectIsSubmitting} from './store/settings.reducer';

@Injectable()
export class SettingsFacade {
    readonly isSubmitting$ = this.store.select(selectIsSubmitting);
    readonly errors$ = this.store.select(selectErrors);

    constructor(private store: Store<SettingsStateInterface>) {}
}
