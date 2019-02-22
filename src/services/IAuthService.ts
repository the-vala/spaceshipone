import { IUserCredential } from '../utilities/IUserCredential';
export interface IAuthService {
    logIn(user: string, password: string): Promise<void | IUserCredential>;
    signUp(user: string, password: string): Promise<void | IUserCredential>;
}