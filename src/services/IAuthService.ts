export interface IAuthService {
    logIn(user: string, pass: string): boolean;
    signUp(user: string, pass: string): boolean;
}