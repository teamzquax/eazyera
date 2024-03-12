import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedInUser: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    this.authService.isLoggedInUser().subscribe(res=> {
      this.isLoggedInUser = res;
    })
    setTimeout(() => {
      if (this.isLoggedInUser) {
      } else {
        this.router.navigate(['/signup']);
      }
    }, 1000);
    return this.isLoggedInUser;
   
  }
}
