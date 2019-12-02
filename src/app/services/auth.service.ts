import { Injectable } from '@angular/core';
import { User, auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  loggedUser: any = JSON.parse(localStorage.getItem('user'));

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async  login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);

      this.router.navigate(['menu/user-area']);
    } catch (e) {
      alert('Error! ' + e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    // this.router.navigate(['login']);
  }

  async register(email: string, password: string) {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    // this.sendEmailVerification();
    this.router.navigate(['login']);

    return result;
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
    // this.router.navigate(['admin/verify-email']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async loginWithGoogle() {
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(['menu/user-area']);
  }

  async loginWithFacebook() {
    await this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    this.router.navigate(['menu/user-area']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
