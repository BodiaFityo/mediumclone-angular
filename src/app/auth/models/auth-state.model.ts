import {BackEndErrors} from 'src/app/shared/models/back-end-errors.model';
import {User} from 'src/app/shared/models/user.model';

export interface AuthStateInterface {
    isSubmitting: boolean;
    isLoading: boolean;
    user: User | null;
    errors: BackEndErrors | null;
}
