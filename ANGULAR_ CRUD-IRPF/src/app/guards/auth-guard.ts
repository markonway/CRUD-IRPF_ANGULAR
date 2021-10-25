import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'app/views/login/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanLoad{

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    return this.checkAcess()
  }

  private checkAcess():any{
    if(this.authService.userIsAuthenticated()){
      return true
    } else {
      this.router.navigate(['login'])
      return false
    }
  }
  
  canLoad(route: Route): Observable<boolean>{
    return this.checkAcess()
  }
}
