import {BackEndErrors} from 'src/app/shared/models/back-end-errors.model';

export interface CreateArticleState {
    isSubmitting: boolean;
    errors: BackEndErrors | null;
}
