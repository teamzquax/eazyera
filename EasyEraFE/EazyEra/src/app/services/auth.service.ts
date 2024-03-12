import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SignupService } from './signup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();
  userId: number;

  constructor(private router: Router, private signupService: SignupService) { }

  login(phoneNumber: string) {
    debugger;
    console.log("test from auth service");
    this.signupService.AuthoriseUserLogin(phoneNumber).
      subscribe({
        next: (userId: number) => {
          console.log(userId)
          if (userId !== null && userId !== undefined && userId > 0) {
            // Set userId and isLoggedIn after successful login
            this.userId = userId;
            this.loggedIn.next(true);
            // Navigate to dashboard or any other page
            this.router.navigate(['']);
          } else {
            console.log('Invalid user ID received');
            // Handle invalid user ID, e.g., display error message
          }
        },
        error: (e) =>
          console.error('An error occurred during login:', e),
        complete: () => console.info('Login process completed')
      })
  }
  logout() {
    this.loggedIn.next(false);
    this.userId = null;
  }

  isLoggedInUser() {
    console.log(this.isLoggedInUser);
    return this.isLoggedIn;
  }
  getUserId(): number | null {
    return this.userId;
  }
}
