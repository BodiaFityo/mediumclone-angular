import {Route} from '@angular/router';
import {provideState} from '@ngrx/store';
import {SettingsComponent} from './components/settings.component';
import {SettingsFacade} from './settings.facade';
import {settingFeatureKey, settingsReducer} from './store/settings.reducer';

export const settings: Route[] = [
    {
        path: '',
        component: SettingsComponent,
        providers: [
            SettingsFacade,
            provideState(settingFeatureKey, settingsReducer),
        ],
    },
];
