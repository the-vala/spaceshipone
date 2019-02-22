import { IAuthService } from './IAuthService';
import {IUserCredential} from '../utilities/IUserCredential'
import firebase from 'firebase';

class AuthService implements IAuthService {
    signUp (user: string, password: string): Promise<void | IUserCredential> {
        return firebase.auth().createUserWithEmailAndPassword(user, password).then(
            function(firebaseUserCredential: firebase.auth.UserCredential) {
                let userCredential: IUserCredential = {
                    displayName: null,
                    email: null,
                    uId: null
                }
                if (firebaseUserCredential.user) {
                    userCredential.displayName = firebaseUserCredential.user.displayName
                    userCredential.email = firebaseUserCredential.user.email
                    userCredential.uId = firebaseUserCredential.user.uid
                }
                return userCredential
            }
        ).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
    
    logIn (user: string, password: string): Promise<void | IUserCredential> {
        return firebase.auth().signInWithEmailAndPassword(user, password).then(
            function (firebaseUserCredential: firebase.auth.UserCredential) {
                let userCredential: IUserCredential = {
                    displayName: null,
                    email: null,
                    uId: null
                }
                if (firebaseUserCredential.user) {
                    userCredential.displayName = firebaseUserCredential.user.displayName
                    userCredential.email = firebaseUserCredential.user.email
                    userCredential.uId = firebaseUserCredential.user.uid
                }
                return userCredential
            }
        ).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
}