export interface RegisterUserRequest {
    user: {
        username: string;
        email: string;
        password: string;
    };
}
