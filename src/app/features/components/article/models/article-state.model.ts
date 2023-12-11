import {Articles} from 'src/app/shared/models/articles.model';

export interface ArticleStateInterface {
    isLoading: boolean;
    article: Articles | null;
    errors: string | null;
}
