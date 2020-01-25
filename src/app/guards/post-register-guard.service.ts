import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostRegisterGuardService {
  constructor(public authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isAuthorized) {
      this.router.navigate(['error', '403']);
    }

    return this.authService.isAuthorized;
  }
}
