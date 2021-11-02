import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'app/views/login/auth.service';
import { Route } from '@angular/compiler/src/core';
import { CookieService } from 'ngx-cookie-service'
import { EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanLoad{

  showMenuEmitter = new EventEmitter<boolean>()

  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService,
    private location: Location
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    return this.checkAcess()
  }

  private checkAcess():any{
    if(this.cookieService.get("logged") == "true"){
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
