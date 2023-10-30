import {GetFeedResponse} from './get-feed-respons.model';

export interface FeedState {
    feed: GetFeedResponse | null;
    isLoading: boolean;
    error: string | null;
}
