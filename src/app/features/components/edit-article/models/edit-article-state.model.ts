import {Articles} from 'src/app/shared/models/articles.model';

export interface editArticleState {
    article: Articles | null;
    isSubmitting: boolean;
    isLoading: boolean;
    errors: string | null;
}
