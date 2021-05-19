import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
    // Google, Facebook, Apple, Twitter, Github ... 로그인 인증
    // 1. 각 로그인별 Provider객체를 생성한다
    // 2. 팝업창으로 로그인화면을 띄운다
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    logout() {
        firebase.auth().signOut();
    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }
}

export default AuthService;