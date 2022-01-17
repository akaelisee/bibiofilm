import { Component } from 'react'
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from '@firebase/auth'
import { auth } from './firebase-config'

export default class AuthFirebase extends Component {

    constructor(props) {
        super(props)

        this.auth = auth;
        this.provider = new GoogleAuthProvider();
    }

    signUpUser = async (email, password) =>
    await createUserWithEmailAndPassword(auth, email, password);

    signInUser = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password);

    signOutUser = async () => 
    await signOut(auth);

    passwordReset = async (email) => 
    await sendPasswordResetEmail(auth, email);

    signInWithGoogle = async () =>
    await signInWithPopup(auth, this.provider);

    fetchSignInMethods = async (email) =>
    fetchSignInMethodsForEmail(auth, email);
}
