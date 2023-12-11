import {User} from './user.model';

export interface UpdateUserRequest {
    user: User & {password: string};
}
