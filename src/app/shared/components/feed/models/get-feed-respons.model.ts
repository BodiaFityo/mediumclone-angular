import {Articles} from 'src/app/shared/models/articles.model';

export interface GetFeedResponse {
    articles: Articles[];
    articlesCount: number;
}
