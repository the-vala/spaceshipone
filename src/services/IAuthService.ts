export interface IAuthService {
    logIn(user: string, password: string): boolean;
    signUp(user: string, password: string): boolean;
}