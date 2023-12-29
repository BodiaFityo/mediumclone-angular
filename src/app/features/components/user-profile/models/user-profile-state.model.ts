import {Profile} from 'src/app/shared/models/profile.model';

export interface UserProfileState {
    profile: Profile | null;
    isLoading: boolean;
    errors: string | null;
}
